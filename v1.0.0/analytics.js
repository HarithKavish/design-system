/**
 * Harith Design System — Analytics
 * Version: 1.0.0
 *
 * Loads Google Analytics (GA4) and Cloudflare Web Analytics for a surface,
 * each independently, from two per-surface <meta> tags:
 *
 *   <meta name="harith-ga-id" content="G-XXXXXXX">
 *   <meta name="harith-cf-token" content="<32-char beacon token>">
 *
 * Unlike theme or identity, traffic is not something surfaces share — every
 * surface gets its own GA4 property and its own Cloudflare Web Analytics
 * site, so each one carries its own pair of values instead of one shared
 * constant. A surface with neither tag loads neither script, so this file is
 * safe to include in the shared <head> block before either ID exists.
 */
(function () {
    function meta(name) {
        var el = document.querySelector('meta[name="' + name + '"]');
        var content = el && el.getAttribute('content');
        return content ? content.trim() : '';
    }

    function loadGoogleAnalytics(id) {
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = window.gtag || gtag;
        gtag('js', new Date());
        gtag('config', id);
    }

    function loadCloudflareAnalytics(token) {
        var script = document.createElement('script');
        script.defer = true;
        script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
        script.setAttribute('data-cf-beacon', JSON.stringify({ token: token }));
        document.head.appendChild(script);
    }

    var gaId = meta('harith-ga-id');
    var cfToken = meta('harith-cf-token');

    if (gaId) loadGoogleAnalytics(gaId);
    if (cfToken) loadCloudflareAnalytics(cfToken);
})();
