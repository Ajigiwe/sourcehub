/**
 * Footer Component (Non-ESM Version)
 */
window.Footer = function () {
    return window.Utils.createElement('footer', { className: 'footer section container' },
        window.Utils.createElement('div', { className: 'footer-grid' },
            window.Utils.createElement('div', { className: 'footer-info' },
                window.Utils.createElement('h3', {}, 'SourceHub'),
                window.Utils.createElement('p', {}, 'Connecting professional buyers with premium suppliers.')
            ),
            window.Utils.createElement('div', { className: 'footer-links' },
                window.Utils.createElement('h4', {}, 'Directory'),
                window.Utils.createElement('ul', {},
                    window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/products' }, 'All Products')),
                    window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/brands' }, 'Brand Directory')),
                    window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/categories' }, 'Categories'))
                )
            ),
            window.Utils.createElement('div', { className: 'footer-links' },
                window.Utils.createElement('h4', {}, 'Support'),
                window.Utils.createElement('ul', {},
                    window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/contact' }, 'Platform Inquiry')),
                    window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/' }, 'Privacy Policy'))
                )
            )
        ),
        window.Utils.createElement('div', { className: 'footer-bottom text-center' },
            window.Utils.createElement('p', {}, `© ${new Date().getFullYear()} SourceHub. All rights reserved.`)
        )
    );
};
