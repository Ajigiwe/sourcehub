/**
 * Header Component (Non-ESM Version)
 */
window.Header = function () {
    return window.Utils.createElement('nav', { className: 'header-nav container' },
        window.Utils.createElement('div', { className: 'header-top-row' },
            window.Utils.createElement('div', { className: 'header-left' },
                window.Utils.createElement('a', { href: '#/', className: 'logo' }, 'SourceHub')
            ),
            window.Utils.createElement('div', { className: 'header-right' },
                window.Utils.createElement('a', { href: '#/products' }, 'Browse'),
                window.Utils.createElement('a', { href: '#/shortlist', className: 'shortlist-link' },
                    'Shortlist',
                    window.Utils.createElement('span', { id: 'shortlist-count', className: 'count-badge' }, '0')
                )
            )
        ),
        window.Utils.createElement('div', { className: 'header-search-container' },
            window.SearchBar()
        )
    );
};
