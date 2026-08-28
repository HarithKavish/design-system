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
    let currentTheme = 'light';

    function detectPreferredTheme() {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            if (saved === 'dark' || saved === 'light') return saved;
        } catch (e) { /* storage blocked; fall through to system preference */ }
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

        if (persist) {
            try { localStorage.setItem(THEME_KEY, currentTheme); } catch (e) { /* non-fatal */ }
        }
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

    document.addEventListener('DOMContentLoaded', () => {
        updateToggleText(currentTheme);
        document.querySelectorAll('#darkModeToggle').forEach(btn => {
            btn.addEventListener('click', toggleTheme);
        });
    });
})();
