/**
 * Harith Design System — Shell Components (Web Components)
 * Version: 2.0.0 (v1.0.0-compatible)
 *
 * Defines <harith-header> and <harith-footer>.
 * Handles the theme toggle and Google Sign-In internally, and dispatches
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
    const GOOGLE_USER_KEY = 'harith_google_user';

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

    class HarithHeader extends HTMLElement {
        static get observedAttributes() {
            return ['site-title', 'site-tagline', 'google-client-id', 'nav-links',
                    'brand-href', 'brand-mark', 'reading-progress'];
        }

        connectedCallback() {
            /* Anything authored inside <harith-header> is a surface-specific
               header action — a settings menu, an extra control. Keep the real
               nodes, not their markup, so the page's own listeners survive a
               re-render. Captured once: render() empties this element. */
            if (!this._actions) {
                this._actions = document.createDocumentFragment();
                while (this.firstChild) this._actions.appendChild(this.firstChild);
            }
            this.render();
            // Attributes are parsed by now, but GSI may not have loaded yet.
            setTimeout(() => {
                this.initThemeToggle();
                this.initNavToggle();
                this.initGoogleAuth();
            }, 0);
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (oldValue === newValue) return;
            this.render();
            this.initThemeToggle();
            this.initNavToggle();
            if (name === 'google-client-id') this.initGoogleAuth();
        }

        get siteTitle() { return this.getAttribute('site-title') || 'Harith Kavish'; }
        get siteTagline() { return this.getAttribute('site-tagline') || ''; }
        get navLinks() {
            try { return JSON.parse(this.getAttribute('nav-links') || '[]'); }
            catch { return []; }
        }
        get googleClientId() { return this.getAttribute('google-client-id'); }
        get brandHref() { return this.getAttribute('brand-href') || '/'; }
        get brandMark() { return this.getAttribute('brand-mark') || ''; }
        get readingProgress() { return this.hasAttribute('reading-progress'); }

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

            const googleSlot = this.googleClientId
                ? '<div class="google-button-wrapper" id="googleSignInButton" aria-label="Sign in with Google"></div>'
                : '';

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

            /* Move the authored nodes back in. They are held in a fragment, so
               appending relocates them rather than copying. */
            if (this._actions && this._actions.childNodes.length) {
                const slot = this.querySelector('.site-header__slot');
                if (slot) slot.appendChild(this._actions);
            }

            this.querySelectorAll('[data-action]').forEach(btn => {
                btn.addEventListener('click', e => {
                    this.dispatchEvent(new CustomEvent('harith-shell-action', {
                        detail: { action: btn.getAttribute('data-action'), originalEvent: e },
                        bubbles: true
                    }));
                });
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
            if (!container || !this.googleClientId) return;

            try {
                const stored = localStorage.getItem(GOOGLE_USER_KEY);
                if (stored) {
                    const user = JSON.parse(stored);
                    if (user && user.name) {
                        this.renderUserProfile(container, user);
                        this.dispatchEvent(new CustomEvent('harith-auth-change', { detail: { user }, bubbles: true }));
                        return;
                    }
                }
            } catch (e) { /* corrupt or blocked storage; fall through to sign-in */ }

            const initGSI = () => {
                if (window.google && google.accounts && google.accounts.id) {
                    google.accounts.id.initialize({
                        client_id: this.googleClientId,
                        callback: (response) => {
                            const payload = decodeJwt(response.credential);
                            if (!payload) return;
                            const user = { name: payload.name, picture: payload.picture, email: payload.email };
                            try { localStorage.setItem(GOOGLE_USER_KEY, JSON.stringify(user)); } catch (e) { /* non-fatal */ }
                            this.renderUserProfile(container, user);
                            this.dispatchEvent(new CustomEvent('harith-auth-change', { detail: { user }, bubbles: true }));
                        }
                    });
                    google.accounts.id.renderButton(container, { theme: 'outline', size: 'large', shape: 'pill' });
                } else {
                    setTimeout(initGSI, 200);
                }
            };
            initGSI();
        }

        renderUserProfile(container, user) {
            const dropdownId = 'userProfileDropdown';
            container.innerHTML =
                '<button type="button" class="signed-in-button" aria-label="Signed in as ' + esc(user.name) + '" aria-expanded="false" aria-controls="' + dropdownId + '">' +
                    '<img src="' + esc(user.picture || '') + '" alt="' + esc(user.name) + '" class="signed-in-button__avatar" loading="lazy" />' +
                '</button>' +
                '<div id="' + dropdownId + '" class="user-dropdown-menu">' +
                    '<div class="user-dropdown-header">' +
                        '<span class="user-dropdown-name">' + esc(user.name) + '</span>' +
                    '</div>' +
                    '<button type="button" class="user-dropdown-action" id="logoutBtn">Sign Out</button>' +
                '</div>';

            const btn = container.querySelector('.signed-in-button');
            const dropdown = container.querySelector('.user-dropdown-menu');
            const logout = container.querySelector('#logoutBtn');

            btn.onclick = (e) => {
                e.stopPropagation();
                const open = !dropdown.classList.contains('show');
                dropdown.classList.toggle('show', open);
                btn.setAttribute('aria-expanded', String(open));
                btn.classList.toggle('active', open);
            };
            dropdown.onclick = e => e.stopPropagation();

            if (!this._globalClickListener) {
                this._globalClickListener = () => {
                    const menu = this.querySelector('.user-dropdown-menu');
                    const trigger = this.querySelector('.signed-in-button');
                    if (menu) menu.classList.remove('show');
                    if (trigger) {
                        trigger.setAttribute('aria-expanded', 'false');
                        trigger.classList.remove('active');
                    }
                };
                document.addEventListener('click', this._globalClickListener);
            }

            logout.onclick = () => {
                try { localStorage.removeItem(GOOGLE_USER_KEY); } catch (e) { /* non-fatal */ }
                this.dispatchEvent(new CustomEvent('harith-auth-change', { detail: { user: null }, bubbles: true }));
                location.reload();
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
