/**
 * Harith Design System — Shell Components (Web Components)
 * Version: 2.0.0 (v1.0.0-compatible)
 *
 * Defines <harith-header> and <harith-footer>.
 * Handles the theme toggle and the signed-in state internally, and dispatches
 * 'harith-auth-change' on login/logout.
 *
 * Ported from v1.1.1. The attribute contract, the events and the
 * window.HarithShell fallback are unchanged; what changed is the markup:
 * the elements now emit the current system's class names (.site-header,
 * .brand, .site-nav, .site-footer) instead of v1.0.0's .shared-* names, and
 * the header gains the responsive .nav-toggle the current shell CSS expects.
 * The dropdown styles the old build injected at runtime now ship in
 * components.css.
 */

(function () {
    /* The placeholder person, shown when an account has no picture.

       Not an empty circle: a blank where a face belongs reads as something that
       failed to load, and an account without a picture is complete rather than
       broken. The same mark the account service draws, so one account looks like
       itself everywhere. */
    const PERSON_MARK =
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">' +
            '<path d="M12 12.4a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"/>' +
            '<path d="M12 14.1c-4.05 0-7.3 2.2-7.3 4.9v.9a.9.9 0 0 0 .9.9h12.8a.9.9 0 0 0 .9-.9v-.9c0-2.7-3.25-4.9-7.3-4.9Z"/>' +
        '</svg>';


    /** The ecosystem's front door. Every surface sends people to the same one. */
    const SIGN_IN_URL = 'https://auth.harithkavish.com/';

    const GOOGLE_USER_KEY = 'user';

    /* Shared across every *.harithkavish.com surface, so signing in on one is
       signing in on all. Display state only — it says who the reader is, never
       that they are allowed to do anything. Authorisation is a server's job. */
    const store = window.HarithStore || {
        get: k => { try { return localStorage.getItem('hk.' + k); } catch (e) { return null; } },
        set: (k, v) => { try { localStorage.setItem('hk.' + k, v); } catch (e) { /* blocked */ } },
        remove: k => { try { localStorage.removeItem('hk.' + k); } catch (e) { /* non-fatal */ } },
        migrate: () => {},
        subscribe: () => {}
    };
    store.migrate(GOOGLE_USER_KEY, 'harith_google_user');

    function readSharedUser() {
        try {
            const raw = store.get(GOOGLE_USER_KEY);
            const user = raw ? JSON.parse(raw) : null;
            return (user && user.name) ? user : null;
        } catch (e) { return null; }
    }

    function toggleTheme() {
        if (window.HarithTheme) {
            window.HarithTheme.toggle();
        } else {
            const isDark = !document.documentElement.classList.contains('dark-mode');
            document.documentElement.classList.toggle('dark-mode', isDark);
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            document.body.classList.toggle('dark-mode', isDark);
        }
    }

    function isDarkNow() {
        return document.documentElement.getAttribute('data-theme') === 'dark' ||
               document.documentElement.classList.contains('dark-mode');
    }

    /* Titles, nav labels and Google profile fields all reach innerHTML, so
       they are escaped rather than trusted. */
    function esc(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function decodeJwt(credential) {
        try {
            const payload = credential.split('.')[1];
            const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
            const decoded = decodeURIComponent(atob(base64)
                .split('')
                .map(char => '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2))
                .join(''));
            return JSON.parse(decoded);
        } catch (e) { return null; }
    }

    function onReady(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn, { once: true });
        } else {
            fn();
        }
    }

    class HarithHeader extends HTMLElement {
        static get observedAttributes() {
            return ['site-title', 'site-tagline', 'nav-links', 'brand-href',
                    'brand-mark', 'reading-progress', 'sign-in-url', 'site-settings-label'];
        }

        connectedCallback() {
            this.render();
            /* The parser sets attributes and inserts this element BEFORE it
               parses the children, so authored content arrives after the first
               render. Collect it once the document is parsed. */
            if (!this._parseHook && document.readyState === 'loading') {
                this._parseHook = true;
                document.addEventListener('DOMContentLoaded',
                    () => this.adoptAuthored(), { once: true });
            }
            // Attributes are parsed by now, but GSI may not have loaded yet.
            setTimeout(() => {
                this.initThemeToggle();
                this.initNavToggle();
                this.initGoogleAuth();
            }, 0);
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (oldValue === newValue) return;
            /* Fires once per attribute while parsing, before connectedCallback.
               Rendering then would publish a header the first real render has
               to replace, and the parser would append the page's own children
               after it. Let connectedCallback do the first render. */
            if (!this._rendered) return;
            this.render();
            this.initThemeToggle();
            this.initNavToggle();
        }

        get siteTitle() { return this.getAttribute('site-title') || 'Harith Kavish'; }
        get siteTagline() { return this.getAttribute('site-tagline') || ''; }
        get navLinks() {
            try { return JSON.parse(this.getAttribute('nav-links') || '[]'); }
            catch { return []; }
        }
        get brandHref() { return this.getAttribute('brand-href') || '/'; }
        get brandMark() { return this.getAttribute('brand-mark') || ''; }
        /** Overridable so a preview deployment can point at its own instance. */
        get signInUrl() { return this.getAttribute('sign-in-url') || SIGN_IN_URL; }
        get readingProgress() { return this.hasAttribute('reading-progress'); }
        get siteSettingsLabel() { return this.getAttribute('site-settings-label') || 'Site'; }

        render() {
            const navMarkup = this.navLinks.map(link => link.action
                ? '<button type="button" class="site-nav__link" data-action="' + esc(link.action) + '">' + esc(link.label) + '</button>'
                : '<a class="site-nav__link" href="' + esc(link.href) + '">' + esc(link.label) + '</a>'
            ).join('');

            const tagline = this.siteTagline
                ? '<span class="brand__descriptor">' + esc(this.siteTagline) + '</span>'
                : '';

            /* Decorative: the brand name beside it already carries the accessible text. */
            const brandMark = this.brandMark
                ? '<img class="brand__mark" src="' + esc(this.brandMark) + '" alt="" aria-hidden="true">'
                : '';

            const navBlock = navMarkup
                ? '<nav class="site-nav" aria-label="Primary">' + navMarkup + '</nav>'
                : '';

            const navToggle = navMarkup
                ? '<button type="button" class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">' +
                  '<span class="nav-toggle__bars">' +
                  '<span class="nav-toggle__bar"></span><span class="nav-toggle__bar"></span><span class="nav-toggle__bar"></span>' +
                  '</span></button>'
                : '';

            /* Rendered whether or not this surface offers sign-in: without a
               client id it still shows who the reader is, from the shared
               store. CSS hides it while it is empty. */
            const googleSlot =
                '<div class="google-button-wrapper" id="googleSignInButton"></div>';

            /* Hold anything the page authored — whatever is not the header we
               rendered last time — so the innerHTML swap below cannot destroy
               it. Real nodes are moved, so listeners the page attached live on. */
            this._authored = this._authored || document.createDocumentFragment();
            const heldSlot = this.querySelector('.site-header__slot');
            if (heldSlot) {
                while (heldSlot.firstChild) this._authored.appendChild(heldSlot.firstChild);
            }
            Array.prototype.slice.call(this.childNodes).forEach(node => {
                if (node !== this._headerEl) this._authored.appendChild(node);
            });

            // Light DOM, so the page's global CSS styles these nodes.
            this.innerHTML =
                '<header class="site-header">' +
                    '<div class="site-header__inner">' +
                        '<a class="brand" href="' + esc(this.brandHref) + '">' +
                            brandMark +
                            '<span class="brand__text">' +
                                '<span class="brand__name">' + esc(this.siteTitle) + '</span>' +
                                tagline +
                            '</span>' +
                        '</a>' +
                        navBlock +
                        '<div class="site-header__actions">' +
                            '<span class="site-header__slot"></span>' +
                            '<button id="darkModeToggle" class="theme-toggle" aria-label="Toggle dark mode">' +
                                (isDarkNow() ? '☀️' : '🌙') +
                            '</button>' +
                            googleSlot +
                            navToggle +
                        '</div>' +
                    '</div>' +
                    /* The bar is driven by the page, which sets its width as the
                       reader scrolls. data-progress is the hook it looks for. */
                    (this.readingProgress
                        ? '<div class="reading-progress" aria-hidden="true">' +
                              '<span class="reading-progress__bar" data-progress></span>' +
                          '</div>'
                        : '') +
                '</header>';

            this._rendered = true;
            this._headerEl = this.firstElementChild;
            this.adoptAuthored();

            this.querySelectorAll('[data-action]').forEach(btn => {
                btn.addEventListener('click', e => {
                    this.dispatchEvent(new CustomEvent('harith-shell-action', {
                        detail: { action: btn.getAttribute('data-action'), originalEvent: e },
                        bubbles: true
                    }));
                });
            });
        }

        /* Move page-authored nodes into the header's actions slot. Safe to call
           repeatedly: our own rendered header is excluded by identity. */
        /**
         * A page that wants its own settings surfaced in the shared profile
         * dropdown authors a <template class="site-settings-items"> as a
         * child of <harith-header>, alongside a site-settings-label
         * attribute naming the section ("Search" -> "Search settings").
         * <template> content is inert and never renders on its own, so it
         * is safe to leave the (now-empty) template tag wherever
         * adoptAuthored's generic sweep puts it — only its captured
         * innerHTML is used, once, the first time it is found. Children
         * are not parsed yet on the FIRST call (see the connectedCallback
         * comment above), so this is checked again on every later call
         * adoptAuthored already gets, rather than assumed to be a
         * one-shot success.
         */
        captureSiteSettings() {
            if (this._siteSettingsHTML) return;
            const tpl = this.querySelector('template.site-settings-items');
            if (!tpl) return;
            this._siteSettingsHTML = tpl.innerHTML;
            this._siteSettingsLabel = this.siteSettingsLabel;
            // The menu may already have been built without knowing this
            // existed (e.g. render() ran before children were parsed) --
            // rebuild it now that it's known, harmless if unchanged.
            if (this._rendered) this.initGoogleAuth();
        }

        adoptAuthored() {
            this.captureSiteSettings();
            const slot = this.querySelector('.site-header__slot');
            if (!slot) return;
            if (this._authored && this._authored.childNodes.length) {
                slot.appendChild(this._authored);
            }
            Array.prototype.slice.call(this.childNodes).forEach(node => {
                if (node !== this._headerEl) slot.appendChild(node);
            });
        }

        initThemeToggle() {
            const btn = this.querySelector('#darkModeToggle');
            if (!btn) return;
            /* theme-toggle.js, when loaded, owns the click via a delegated
               listener. Binding here as well is what made v1.0.0 toggle twice
               per click and appear stuck, so this is only the standalone
               fallback for pages that do not load it. */
            if (!window.HarithTheme) btn.onclick = toggleTheme;
            // Keep the icon honest when something else flips the theme.
            if (!this._themeObserver) {
                this._themeObserver = new MutationObserver(() => {
                    const current = this.querySelector('#darkModeToggle');
                    if (current) current.textContent = isDarkNow() ? '☀️' : '🌙';
                });
                this._themeObserver.observe(document.documentElement, {
                    attributes: true, attributeFilter: ['class', 'data-theme']
                });
            }
        }

        initNavToggle() {
            const toggle = this.querySelector('.nav-toggle');
            const nav = this.querySelector('.site-nav');
            if (!toggle || !nav) return;
            toggle.onclick = () => {
                const open = !nav.classList.contains('is-open');
                nav.classList.toggle('is-open', open);
                toggle.classList.toggle('is-open', open);
                toggle.setAttribute('aria-expanded', String(open));
            };
            nav.querySelectorAll('.site-nav__link').forEach(link => {
                link.addEventListener('click', () => {
                    nav.classList.remove('is-open');
                    toggle.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            });
        }

        initGoogleAuth() {
            const container = this.querySelector('#googleSignInButton');
            if (!container) return;

            const shared = readSharedUser();
            if (shared) {
                this.renderUserProfile(container, shared);
                this.dispatchEvent(new CustomEvent('harith-auth-change', { detail: { user: shared }, bubbles: true }));
                return;
            }

            /* Signed out: a page with its own settings still needs a place
               to put them, so it gets the same dropdown shell with just a
               settings section and a sign-in action — the account-bound
               parts (name, General settings) have nothing to show yet.
               A page with nothing to contribute keeps today's plain link. */
            if (this._siteSettingsHTML) {
                this.renderSignedOutMenu(container);
                return;
            }
            this.renderSignInButton(container);
        }

        /**
         * The way in is our own front door, not a provider's.
         *
         * Every surface sends people to the same place, where they sign in to a
         * HarithKavish account — and may choose Google there if they want to. A
         * provider button on each surface would make the provider look like the
         * account, which it is not: it is one way of proving one.
         *
         * The current page travels along, so signing in returns the reader to
         * where they were rather than to a dashboard they did not ask for.
         */
        renderSignInButton(container) {
            const href = this.signInUrl + '?next=' + encodeURIComponent(location.href);
            container.innerHTML =
                '<a class="button signin-button" href="' + esc(href) + '">' +
                    '<span>Sign in to Nexus</span>' +
                '</a>';
        }

        /** The site-settings section markup, shared by both the signed-in
            and signed-out dropdowns — empty string when the page authored
            none. */
        siteSettingsSectionHTML() {
            if (!this._siteSettingsHTML) return '';
            return '<div class="user-dropdown-section">' +
                '<span class="user-dropdown-section-title">' + esc(this._siteSettingsLabel) + ' settings</span>' +
                this._siteSettingsHTML +
            '</div>';
        }

        /** Wires a dropdown's open/close behavior: click the trigger to
            toggle, click inside to stay open, click anywhere else to
            close. Shared by the signed-in and signed-out menus so there is
            one place that owns "how a header dropdown opens," not two
            copies that can drift. */
        wireDropdownToggle(trigger, dropdown) {
            trigger.onclick = (e) => {
                e.stopPropagation();
                const open = !dropdown.classList.contains('show');
                dropdown.classList.toggle('show', open);
                trigger.setAttribute('aria-expanded', String(open));
                trigger.classList.toggle('active', open);
            };
            dropdown.onclick = e => e.stopPropagation();

            if (!this._globalClickListener) {
                this._globalClickListener = () => {
                    this.querySelectorAll('.user-dropdown-menu.show').forEach(menu => menu.classList.remove('show'));
                    this.querySelectorAll('[aria-haspopup="true"].active').forEach(t => {
                        t.setAttribute('aria-expanded', 'false');
                        t.classList.remove('active');
                    });
                };
                document.addEventListener('click', this._globalClickListener);
            }
        }

        /** Signed out, but the page has settings of its own: a small gear
            trigger opens a dropdown with just that section plus sign-in —
            there is no name/avatar or General settings to show yet. */
        renderSignedOutMenu(container) {
            const dropdownId = 'siteSettingsDropdown';
            const signInHref = this.signInUrl + '?next=' + encodeURIComponent(location.href);

            container.innerHTML =
                '<button type="button" class="settings-trigger" aria-label="Open settings" ' +
                    'aria-haspopup="true" aria-expanded="false" aria-controls="' + dropdownId + '">' +
                    '<span aria-hidden="true">&#9881;</span>' +
                '</button>' +
                '<div id="' + dropdownId + '" class="user-dropdown-menu">' +
                    this.siteSettingsSectionHTML() +
                    '<div class="user-dropdown-section">' +
                        '<a class="user-dropdown-action" href="' + esc(signInHref) + '">Sign in</a>' +
                    '</div>' +
                '</div>';

            this.wireDropdownToggle(
                container.querySelector('.settings-trigger'),
                container.querySelector('.user-dropdown-menu')
            );
        }

        renderUserProfile(container, user) {
            const dropdownId = 'userProfileDropdown';
            this._gsiPending = false;
            /* The header shows the picture and nothing else: a name beside it
               repeats what the picture already says and pushes the nav around
               as it changes length. How someone proved who they are is the
               identity service's business — no surface marks the provider. */
            const avatar = user.picture
                ? '<img src="' + esc(user.picture) + '" alt="" aria-hidden="true" class="signed-in-button__avatar" loading="lazy" referrerpolicy="no-referrer" />'
                : '<span class="signed-in-button__avatar signed-in-button__avatar--empty" aria-hidden="true">' + PERSON_MARK + '</span>';

            container.innerHTML =
                '<button type="button" class="signed-in-button" aria-label="Signed in as ' + esc(user.name) + '. Open account menu." ' +
                    'aria-haspopup="true" aria-expanded="false" aria-controls="' + dropdownId + '">' +
                    avatar +
                '</button>' +
                '<div id="' + dropdownId + '" class="user-dropdown-menu">' +
                    '<div class="user-dropdown-header">' +
                        '<span class="user-dropdown-name">' + esc(user.name) + '</span>' +
                        (user.email ? '<span class="user-dropdown-email">' + esc(user.email) + '</span>' : '') +
                    '</div>' +
                    '<div class="user-dropdown-section">' +
                        '<span class="user-dropdown-section-title">General settings</span>' +
                        '<a class="user-dropdown-action" href="https://account.harithkavish.com/settings">Account settings</a>' +
                        '<button type="button" class="user-dropdown-action" id="logoutBtn">Sign out</button>' +
                    '</div>' +
                    this.siteSettingsSectionHTML() +
                '</div>';

            this.wireDropdownToggle(
                container.querySelector('.signed-in-button'),
                container.querySelector('.user-dropdown-menu')
            );

            container.querySelector('#logoutBtn').onclick = () => {
                /* Signing out happens at the identity service, not here.
                   Clearing the shared value alone only made the reader *look*
                   signed out — the session survived, and going back to the
                   front door found them still signed in.

                   A surface cannot post to the sign-out route itself: the
                   session cookie is SameSite=Lax, so a cross-site post arrives
                   without it. A top-level navigation carries it, and the page
                   we land on posts from its own origin. */
                this.dispatchEvent(new CustomEvent('harith-auth-change', { detail: { user: null }, bubbles: true }));
                location.href = this.signInUrl + 'signout?next=' + encodeURIComponent(location.href);
            };
        }
    }

    class HarithFooter extends HTMLElement {
        static get observedAttributes() { return ['links', 'copyright-text']; }
        get links() {
            try { return JSON.parse(this.getAttribute('links') || '[]'); }
            catch { return []; }
        }
        connectedCallback() { this.render(); }
        attributeChangedCallback() { this.render(); }
        render() {
            const year = new Date().getFullYear();
            const text = this.getAttribute('copyright-text') || 'Harith Kavish';
            const links = this.links;
            const linkMarkup = links.length
                ? '<nav class="site-footer__nav">' + links.map(link =>
                      '<a class="site-nav__link" href="' + esc(link.href) + '" target="_blank" rel="noreferrer noopener">' + esc(link.label) + '</a>'
                  ).join('') + '</nav>'
                : '';
            this.innerHTML =
                '<footer class="site-footer">' +
                    '<div class="site-footer__inner">' +
                        '<p class="site-footer__copy">© ' + year + ' ' + esc(text) + '</p>' +
                        linkMarkup +
                    '</div>' +
                '</footer>';
        }
    }

    /* ── Overlay scrollbar ──────────────────────────────────────────────
       Native scrollbars take layout width on Windows and Linux, so a page that
       scrolls renders a few pixels narrower than one that does not. This draws
       the bar over the page instead, so the layout is always the full viewport,
       and fades the thumb out shortly after scrolling stops.

       Skipped where the platform already overlays its scrollbars (touch, and
       macOS unless the user has forced them always-on), so we never replace a
       working native bar with our own. */
    function initOverlayScrollbar() {
        const root = document.documentElement;
        if (root.classList.contains('has-overlay-scrollbar')) return;

        const probe = document.createElement('div');
        probe.style.cssText = 'position:absolute;visibility:hidden;overflow:scroll;width:100px;height:100px';
        document.body.appendChild(probe);
        const reservesSpace = probe.offsetWidth - probe.clientWidth > 0;
        probe.remove();
        if (!reservesSpace) return;

        root.classList.add('has-overlay-scrollbar');

        const bar = document.createElement('div');
        bar.className = 'overlay-scrollbar';
        const thumb = document.createElement('span');
        thumb.className = 'overlay-scrollbar__thumb';
        bar.appendChild(thumb);
        document.body.appendChild(bar);

        const MIN = 36;
        let hideTimer = null;
        let dragging = false;

        function metrics() {
            const total = root.scrollHeight;
            const view = root.clientHeight;
            return { total, view, scrollable: total - view > 1 };
        }

        function draw() {
            const { total, view, scrollable } = metrics();
            if (!scrollable) { bar.classList.remove('is-visible'); return; }
            const height = Math.max(view * (view / total), MIN);
            const offset = (root.scrollTop / (total - view)) * (view - height);
            thumb.style.height = height + 'px';
            thumb.style.transform = 'translateY(' + offset + 'px)';
        }

        function reveal() {
            draw();
            if (!metrics().scrollable) return;
            bar.classList.add('is-visible');
            clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                if (!dragging) bar.classList.remove('is-visible');
            }, 900);
        }

        addEventListener('scroll', reveal, { passive: true });
        addEventListener('resize', reveal);
        bar.addEventListener('mouseenter', reveal);

        thumb.addEventListener('pointerdown', event => {
            const { total, view } = metrics();
            const height = Math.max(view * (view / total), MIN);
            const startY = event.clientY;
            const startTop = root.scrollTop;
            dragging = true;
            bar.classList.add('is-dragging');
            thumb.setPointerCapture(event.pointerId);
            event.preventDefault();

            function move(e) {
                const travel = view - height;
                if (travel <= 0) return;
                root.scrollTop = startTop + ((e.clientY - startY) / travel) * (total - view);
            }
            function up() {
                dragging = false;
                bar.classList.remove('is-dragging');
                thumb.removeEventListener('pointermove', move);
                thumb.removeEventListener('pointerup', up);
                reveal();
            }
            thumb.addEventListener('pointermove', move);
            thumb.addEventListener('pointerup', up);
        });

        /* Content can grow after load — a catalog rendering, an article opening. */
        if (window.ResizeObserver) {
            new ResizeObserver(draw).observe(document.body);
        }
        reveal();
    }

    onReady(initOverlayScrollbar);

    /* ── Custom cursor ──────────────────────────────────────────────────
       A heading arrow, like a maps app's puck, that points the way the
       pointer is moving. Colors live entirely in cursor.css as tokens, so
       theme inversion is free; this only ever tracks position and rotation.

       Capability-gated, not device-sniffed: a fine, hoverable pointer is
       what a mouse looks like, and touch has neither. Skipped outright
       under reduced-motion, same policy as every other decorative motion
       in the system (see tokens/motion.css). */
    function initCustomCursor() {
        if (!window.matchMedia) return;
        if (!matchMedia('(pointer: fine) and (hover: hover)').matches) return;
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const HEADING_SVG =
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M12 1.5 19 21 12 17 5 21Z"/>' +
            '</svg>';

        const el = document.createElement('div');
        el.className = 'harith-cursor';
        el.innerHTML = '<div class="harith-cursor__heading">' + HEADING_SVG + '</div>';
        document.body.appendChild(el);
        const heading = el.querySelector('.harith-cursor__heading');

        const TEXT_TARGETS = 'input[type="text"], input[type="email"], input[type="password"], ' +
            'input[type="search"], input[type="tel"], input[type="url"], input[type="number"], ' +
            'input:not([type]), textarea, [contenteditable="true"], [contenteditable=""]';

        /* A heading straight off two raw points is noisy: a couple of
           trembly, sub-pixel-ish steps in slightly different directions
           swing the angle wildly even though the pointer barely moved.

           An earlier version smoothed the per-event delta with an EMA and
           gated on ITS magnitude — but an EMA started from 0 only ever
           approaches a constant input asymptotically, never reaching or
           exceeding it. Any sustained movement whose per-event delta sat
           between the noise floor and that gate would smooth toward a
           value just under the gate forever, freezing the heading no
           matter how long the motion continued.

           Accumulating the net displacement VECTOR since the last update,
           and resetting it only once it crosses the gate, has neither
           problem: real, sustained movement keeps adding to the same
           direction and is guaranteed to cross the gate eventually (no
           asymptote to stall against), while back-and-forth jitter mostly
           cancels itself in the sum instead of nudging the angle. */
        const NOISE_FLOOR = 1.5;           // px per event below which a delta is ignored outright
        const ANGLE_UPDATE_DISTANCE = 8;   // net accumulated px before the heading updates (and resets)
        /* The glyph spins around its own center (a compass needle on a pin
           through its middle), not around its tip — but the tip is still
           the hotspot, so the BOX has to shift opposite the glyph's own
           rotation to keep the tip glued to the pointer. This is the
           tip's offset from the box's center when unrotated (pointing
           up): box is 78px, viewBox is 24, so scale is 78/24; the tip
           sits at viewBox y=1.5 while the center is at y=12, i.e.
           (12 - 1.5) * (78/24) px above center. */
        const TIP_OFFSET = (12 - 1.5) * (78 / 24);
        const TURN_EASE = 0.4; // per-frame convergence toward targetAngle; ~ the old 90ms CSS ease

        /* `angle` is what's actually rendered this frame; `targetAngle` is
           where the heading is turning toward. The translate that keeps the
           tip glued to the pointer is an exact function of whichever angle
           is currently on screen — so both the rotation AND the
           compensating translate are written from the SAME `angle` value,
           in the SAME frame, every frame. An earlier version let a CSS
           transition ease the rotation while the translate snapped
           straight to the angle it was easing toward: for the ~90ms of
           every turn, the box was already positioned for an angle the
           glyph hadn't visually reached yet, so the tip swung away from
           the pointer instead of staying on it — the opposite of the
           point. Interpolating `angle` in JS and deriving both transforms
           from it here removes the CSS transition from the equation
           entirely, so there's nothing left to fall out of sync with. */
        let angle = 0, targetAngle = 0;
        let rawX = null, rawY = null;
        let accumDx = 0, accumDy = 0;
        let pendingX = 0, pendingY = 0;

        function frame() {
            const diff = targetAngle - angle;
            angle = Math.abs(diff) > 0.05 ? angle + diff * TURN_EASE : targetAngle;

            const rad = angle * Math.PI / 180;
            // The box's own center, positioned so that after the glyph
            // rotates around it, the tip lands exactly on the pointer.
            const cx = pendingX - TIP_OFFSET * Math.sin(rad);
            const cy = pendingY + TIP_OFFSET * Math.cos(rad);
            el.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
            heading.style.transform = 'rotate(' + angle + 'deg)';

            requestAnimationFrame(frame);
        }

        function onMove(e) {
            pendingX = e.clientX; pendingY = e.clientY;

            if (rawX !== null) {
                const dx = e.clientX - rawX, dy = e.clientY - rawY;
                if (Math.sqrt(dx * dx + dy * dy) >= NOISE_FLOOR) {
                    accumDx += dx; accumDy += dy;
                    if (Math.sqrt(accumDx * accumDx + accumDy * accumDy) >= ANGLE_UPDATE_DISTANCE) {
                        /* atan2 wraps at +-180deg. Moving `targetAngle` by
                           only the shortest signed delta from where it
                           already is — rather than snapping it straight to
                           atan2's output — lets it accumulate past
                           +-360deg instead of ever jumping back into
                           +-180deg, which is what caused the "spins like
                           crazy once a lap" bug moving in circles surfaced:
                           a heading of e.g. 178deg reading as -179deg next
                           is a 357deg jump in the raw numbers even though
                           the true turn is 3deg the other way. */
                        const target = Math.atan2(accumDy, accumDx) * 180 / Math.PI + 90;
                        // JS % keeps the dividend's sign, so this isn't a true
                        // mod — normalize into (-180, 180] explicitly rather
                        // than assume a single +540 offset lands it there,
                        // which only holds once `targetAngle` has stayed small.
                        let delta = (target - targetAngle) % 360;
                        if (delta > 180) delta -= 360;
                        else if (delta < -180) delta += 360;
                        targetAngle += delta;
                        accumDx = 0; accumDy = 0;
                    }
                }
            }
            rawX = e.clientX; rawY = e.clientY;

            el.classList.add('is-visible');
            el.classList.toggle('is-hidden-over-text', !!(e.target && e.target.closest && e.target.closest(TEXT_TARGETS)));
        }

        function hide() {
            el.classList.remove('is-visible');
            // Otherwise the next move after a re-entry elsewhere computes a
            // heading from a stale pre-leave position.
            rawX = null; rawY = null;
            accumDx = 0; accumDy = 0;
        }

        document.documentElement.classList.add('harith-cursor-active');
        addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', hide);
        addEventListener('blur', hide);
        requestAnimationFrame(frame);
    }

    onReady(initCustomCursor);

    /* Signed in or out on another surface — bring this header into line when
       the tab is looked at again, rather than leaving it claiming otherwise. */
    store.subscribe(function (key) {
        if (key !== GOOGLE_USER_KEY) return;
        document.querySelectorAll('harith-header').forEach(function (header) {
            if (typeof header.initGoogleAuth === 'function') header.initGoogleAuth();
        });
    });

    if (!customElements.get('harith-header')) customElements.define('harith-header', HarithHeader);
    if (!customElements.get('harith-footer')) customElements.define('harith-footer', HarithFooter);

    // Legacy imperative fallback, kept from v1.0.0.
    window.HarithShell = {
        renderHeader: (opts) => {
            const el = document.createElement('harith-header');
            if (opts.brand && opts.brand.title) el.setAttribute('site-title', opts.brand.title);
            if (opts.navLinks) el.setAttribute('nav-links', JSON.stringify(opts.navLinks));
            const target = typeof opts.target === 'string' ? document.querySelector(opts.target) : opts.target;
            target && target.appendChild(el);
        },
        renderFooter: (opts) => {
            const el = document.createElement('harith-footer');
            if (opts.links) el.setAttribute('links', JSON.stringify(opts.links));
            const target = typeof opts.target === 'string' ? document.querySelector(opts.target) : opts.target;
            target && target.appendChild(el);
        }
    };
})();
