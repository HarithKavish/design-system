/**
 * Harith Store — one key/value store shared by every surface in the ecosystem.
 *
 * The problem it solves: localStorage is scoped to an origin, and this
 * ecosystem is a dozen of them — harithkavish.com plus nexus, blog, store,
 * search, sites, api, vr, vm, timeline, forge, account and auth. A preference
 * saved on one was invisible to the rest, so the ecosystem behaved like a
 * collection of unrelated sites. search's own source said as much: "the theme
 * key matches the main site's, though localStorage is per-origin so a choice
 * made there does not carry across to this subdomain."
 *
 * A cookie scoped to .harithkavish.com is readable by every one of those
 * origins, so that is the transport. localStorage is kept as a mirror: it is
 * the fallback when cookies are blocked, and the only store on an origin
 * outside the ecosystem (a preview deployment, localhost) where the shared
 * cookie cannot be set.
 *
 * What belongs here: small, ecosystem-wide preferences and display state —
 * the theme, who is signed in, a dismissed banner. Roughly: anything that
 * would feel broken if it did not follow the reader between subdomains.
 *
 * What does NOT belong here, ever:
 *
 *   - Credentials, tokens, or anything that grants access. Every subdomain and
 *     every script on them can read this, and it is sent on every request to
 *     the domain. It is display state, never proof of anything: authorisation
 *     is decided on a server, not by reading a cookie.
 *   - Personal data beyond what the surface already shows.
 *   - Anything large. Cookies are capped near 4KB per domain and travel with
 *     every request, so values above MAX_VALUE stay in localStorage only and
 *     do not follow the reader.
 */
(function () {
    'use strict';

    var DOMAIN = 'harithkavish.com';
    var PREFIX = 'hk.';
    var MAX_VALUE = 1536;      /* bytes, encoded — leaves room for other cookies */
    var DEFAULT_DAYS = 365;

    /* Only set the shared cookie on the ecosystem's own domain. Anywhere else
       — localhost, a preview deployment — a domain-scoped cookie would either
       be rejected or, on a public suffix, be wrong to set at all. */
    function scope() {
        var h = location.hostname;
        return (h === DOMAIN || h.slice(-(DOMAIN.length + 1)) === '.' + DOMAIN)
            ? '.' + DOMAIN
            : null;
    }

    function readCookie(name) {
        var target = PREFIX + name + '=';
        var parts = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].indexOf(target) === 0) {
                try { return decodeURIComponent(parts[i].slice(target.length)); }
                catch (e) { return null; }
            }
        }
        return null;
    }

    function writeCookie(name, value, days) {
        var domain = scope();
        if (!domain) return false;
        var encoded = encodeURIComponent(value);
        if (encoded.length > MAX_VALUE) return false;
        var age = Math.floor((days == null ? DEFAULT_DAYS : days) * 86400);
        document.cookie = PREFIX + name + '=' + encoded +
            ';domain=' + domain + ';path=/;max-age=' + age +
            ';SameSite=Lax' + (location.protocol === 'https:' ? ';Secure' : '');
        return true;
    }

    function dropCookie(name) {
        var domain = scope();
        if (!domain) return;
        document.cookie = PREFIX + name + '=;domain=' + domain +
            ';path=/;max-age=0;SameSite=Lax';
    }

    function readLocal(name) {
        try { return localStorage.getItem(PREFIX + name); } catch (e) { return null; }
    }
    function writeLocal(name, value) {
        try { localStorage.setItem(PREFIX + name, value); } catch (e) { /* blocked or full */ }
    }
    function dropLocal(name) {
        try { localStorage.removeItem(PREFIX + name); } catch (e) { /* non-fatal */ }
    }

    var listeners = [];
    var seen = {};

    function get(name) {
        var v = readCookie(name);
        if (v === null) v = readLocal(name);
        seen[name] = v;
        return v;
    }

    function set(name, value, options) {
        var v = String(value);
        var days = options && options.days;
        var shared = writeCookie(name, v, days);
        writeLocal(name, v);          /* mirror, so a blocked cookie still works here */
        seen[name] = v;
        return shared;
    }

    function remove(name) {
        dropCookie(name);
        dropLocal(name);
        seen[name] = null;
    }

    /* Cookies fire no storage event, so a change made on another subdomain is
       noticed when this tab is next looked at. That covers the case that
       matters — switch tab, come back, the ecosystem agrees — without polling. */
    function resync() {
        var changed = [];
        for (var name in seen) {
            if (!Object.prototype.hasOwnProperty.call(seen, name)) continue;
            var before = seen[name];
            var now = readCookie(name);
            if (now === null) now = readLocal(name);
            if (now !== before) { seen[name] = now; changed.push({ key: name, value: now }); }
        }
        if (!changed.length) return;
        for (var i = 0; i < listeners.length; i++) {
            for (var j = 0; j < changed.length; j++) {
                try { listeners[i](changed[j].key, changed[j].value); } catch (e) { /* keep going */ }
            }
        }
    }

    window.addEventListener('focus', resync);
    document.addEventListener('visibilitychange', function () {
        if (!document.hidden) resync();
    });
    /* Same-origin tabs still get the immediate signal. */
    window.addEventListener('storage', function (e) {
        if (e.key && e.key.indexOf(PREFIX) === 0) resync();
    });

    /**
     * Adopt a value previously kept in this origin's own localStorage, so a
     * reader's existing preference survives the move to the shared store.
     */
    function migrate(name, legacyKey) {
        if (get(name) !== null) return;
        var old = null;
        try { old = localStorage.getItem(legacyKey); } catch (e) { /* blocked */ }
        if (old !== null && old !== '') {
            set(name, old);
            try { localStorage.removeItem(legacyKey); } catch (e) { /* non-fatal */ }
        }
    }

    window.HarithStore = {
        get: get,
        set: set,
        remove: remove,
        migrate: migrate,
        subscribe: function (fn) { if (typeof fn === 'function') listeners.push(fn); },
        resync: resync,
        /* '.harithkavish.com' where the value is shared, null where this origin
           can only keep it to itself. */
        scope: scope
    };
})();
