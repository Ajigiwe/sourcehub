/**

 * Header Component with Hamburger Menu (Non-ESM Version)
 */
window.Header = function () {
    const nav = window.Utils.createElement('nav', { className: 'header-nav container' });

    // Top row: Logo + Hamburger + Desktop Links
    const topRow = window.Utils.createElement('div', { className: 'header-top-row' });

    const headerLeft = window.Utils.createElement('div', { className: 'header-left' },
        window.Utils.createElement('a', { href: '#/', className: 'logo' }, 'SourceHub')
    );

    // Desktop nav links (hidden on mobile)
    const headerRight = window.Utils.createElement('div', { className: 'header-right header-desktop' },
        window.Utils.createElement('a', { href: '#/products' }, 'Browse'),
        window.Utils.createElement('a', { href: '#/add-product', style: 'color: var(--accent-color); font-weight: 600;' }, '+ Product'),
        window.Utils.createElement('a', { href: '#/add-supplier', style: 'color: var(--accent-color); font-weight: 600;' }, '+ Supplier'),
        window.Utils.createElement('a', { href: '#/shortlist', className: 'shortlist-link' },
            'Shortlist',
            window.Utils.createElement('span', { id: 'shortlist-count', className: 'count-badge' }, '0')
        )
    );

    // Hamburger button (visible on mobile only)
    const hamburger = window.Utils.createElement('button', {
        className: 'hamburger-btn',
        'aria-label': 'Toggle menu',
        onclick: () => {
            mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('open');
        }
    },
        window.Utils.createElement('span', { className: 'hamburger-line' }),
        window.Utils.createElement('span', { className: 'hamburger-line' }),
        window.Utils.createElement('span', { className: 'hamburger-line' })
    );

    topRow.appendChild(headerLeft);
    topRow.appendChild(headerRight);
    topRow.appendChild(hamburger);

    // Mobile menu (hidden by default, toggled by hamburger)
    const mobileMenu = window.Utils.createElement('div', { className: 'mobile-menu' },
        window.Utils.createElement('a', { href: '#/products', onclick: () => { mobileMenu.classList.remove('open'); hamburger.classList.remove('open'); } }, '📦 Browse Products'),
        window.Utils.createElement('a', { href: '#/add-product', onclick: () => { mobileMenu.classList.remove('open'); hamburger.classList.remove('open'); } }, '➕ Add Product'),
        window.Utils.createElement('a', { href: '#/add-supplier', onclick: () => { mobileMenu.classList.remove('open'); hamburger.classList.remove('open'); } }, '🏢 Add Supplier'),
        window.Utils.createElement('a', { href: '#/shortlist', onclick: () => { mobileMenu.classList.remove('open'); hamburger.classList.remove('open'); } }, '⭐ Shortlist'),
        window.Utils.createElement('a', { href: '#/', onclick: () => { mobileMenu.classList.remove('open'); hamburger.classList.remove('open'); } }, '🏠 Home')
    );

    nav.appendChild(topRow);
    nav.appendChild(mobileMenu);
    nav.appendChild(window.Utils.createElement('div', { className: 'header-search-container' }, window.SearchBar()));

    return nav;

 * Header Component (Non-ESM Version)
 */
window.Header = function () {
    return window.Utils.createElement('nav', { className: 'header-nav container' },
        window.Utils.createElement('div', { className: 'header-left' },
            window.Utils.createElement('a', { href: '#/', className: 'logo' }, 'SourceHub')
        ),
        window.Utils.createElement('div', { className: 'header-center' },
            window.SearchBar()
        ),
        window.Utils.createElement('div', { className: 'header-right' },
            window.Utils.createElement('a', { href: '#/products' }, 'Browse'),
            window.Utils.createElement('a', { href: '#/shortlist', className: 'shortlist-link' },
                'Shortlist',
                window.Utils.createElement('span', { id: 'shortlist-count', className: 'count-badge' }, '0')
            )
        )
    );

};
