/**
 * Harith Design System — Theme Toggle
 * Version: 2.0.0 (v1.0.0-compatible)
 *
 * Dark mode with localStorage persistence.
 *
 * Drives BOTH theming mechanisms, deliberately:
 *   - :root[data-theme='dark']  — how the current design system swaps tokens
 *   - .dark-mode on <html>/<body> — how v1.0.0 worked, and how the consuming
 *     sites' own stylesheets still key their dark rules
 * Setting only one would leave half of any given page in the wrong theme.
 *
 * Public API (window.HarithTheme) is unchanged from v1.0.0.
 */

(function () {
    const THEME_KEY = 'theme';

    /* Shared across every *.harithkavish.com surface, so a choice made on one
       is the choice everywhere. Falls back to this origin's own storage when
       harith-store.js is not loaded or the ecosystem cookie cannot be set. */
    const store = window.HarithStore || {
        get: k => { try { return localStorage.getItem('hk.' + k); } catch (e) { return null; } },
        set: (k, v) => { try { localStorage.setItem('hk.' + k, v); } catch (e) { /* blocked */ } },
        migrate: () => {},
        subscribe: () => {}
    };

    /* Carry over a preference saved before the store existed. */
    store.migrate(THEME_KEY, 'theme');
    let currentTheme = 'light';

    function detectPreferredTheme() {
        const saved = store.get(THEME_KEY);
        if (saved === 'dark' || saved === 'light') return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function onBody(fn) {
        if (document.body) fn(document.body);
        else document.addEventListener('DOMContentLoaded', () => fn(document.body), { once: true });
    }

    function updateToggleText(theme) {
        document.querySelectorAll('#darkModeToggle').forEach(btn => {
            btn.textContent = theme === 'dark' ? '☀️' : '🌙';
        });
    }

    /* The chat widget lives in an iframe and cannot read the parent's class. */
    function notifyThemeChange(theme) {
        const chatFrame = document.getElementById('chatFrame');
        if (chatFrame && chatFrame.contentWindow) {
            chatFrame.contentWindow.postMessage({ type: 'theme-change', theme }, '*');
        }
    }

    function applyTheme(theme, persist = true) {
        currentTheme = theme === 'dark' ? 'dark' : 'light';
        const isDark = currentTheme === 'dark';

        document.documentElement.setAttribute('data-theme', currentTheme);
        document.documentElement.classList.toggle('dark-mode', isDark);
        onBody(body => body.classList.toggle('dark-mode', isDark));

        if (persist) store.set(THEME_KEY, currentTheme);
        updateToggleText(currentTheme);
        notifyThemeChange(currentTheme);
    }

    function toggleTheme() {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    function initTheme() {
        applyTheme(detectPreferredTheme(), false);
    }

    window.HarithTheme = {
        toggle: toggleTheme,
        apply: applyTheme,
        get: () => currentTheme,
        init: initTheme
    };

    initTheme();

    /* One delegated listener rather than a per-button one.
       v1.0.0 bound a listener here AND harith-shell.js assigned .onclick to
       the same button, so every click toggled twice and the theme never
       changed. Delegation keeps ownership in one place and keeps working when
       <harith-header> re-renders its button. */
    document.addEventListener('click', e => {
        const btn = e.target && e.target.closest && e.target.closest('#darkModeToggle');
        if (btn) toggleTheme();
    });

    document.addEventListener('DOMContentLoaded', () => updateToggleText(currentTheme));

    /* Changed on another subdomain — adopt it when this tab is looked at again,
       so two open ecosystem tabs do not disagree. */
    store.subscribe((key, value) => {
        if (key !== THEME_KEY) return;
        if ((value === 'dark' || value === 'light') && value !== currentTheme) {
            applyTheme(value, false);
        }
    });
})();
