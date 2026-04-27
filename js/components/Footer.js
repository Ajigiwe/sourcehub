/**
 * Footer Component (Non-ESM Version)
 */
window.Footer = function () {
    return window.Utils.createElement('footer', { className: 'footer-premium' },
        window.Utils.createElement('div', { className: 'container' },
            window.Utils.createElement('div', { className: 'footer-grid' },
                // Brand Column
                window.Utils.createElement('div', { className: 'footer-brand-col' },
                    window.Utils.createElement('h3', { className: 'footer-logo' }, 'SourceHub'),
                    window.Utils.createElement('p', { className: 'footer-text' }, 'The professional gateway for bulk vehicle and mobile electronics procurement. Connect with verified global manufacturers.'),
                    window.Utils.createElement('div', { className: 'newsletter-form' },
                        window.Utils.createElement('h4', { style: 'color: white; margin-bottom: 12px; font-size: 0.95rem;' }, 'Subscribe to Market Insights'),
                        window.Utils.createElement('div', { className: 'flex', style: 'gap: 8px;' },
                            window.Utils.createElement('input', { type: 'email', placeholder: 'Enter your email', style: 'padding: 10px 12px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: white; width: 100%;' }),
                            window.Utils.createElement('button', { className: 'btn-primary', style: 'padding: 10px 16px;' }, 'Subscribe')
                        )
                    )
                ),
                // Links Column 1
                window.Utils.createElement('div', { className: 'footer-links' },
                    window.Utils.createElement('h4', {}, 'Sourcing'),
                    window.Utils.createElement('ul', {},
                        window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/products' }, 'All Products')),
                        window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/categories' }, 'Categories')),
                        window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/brands' }, 'Supplier Directory')),
                        window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/shortlist' }, 'My Shortlist'))
                    )
                ),
                // Links Column 2
                window.Utils.createElement('div', { className: 'footer-links' },
                    window.Utils.createElement('h4', {}, 'For Suppliers'),
                    window.Utils.createElement('ul', {},
                        window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/add-supplier' }, 'Register Company')),
                        window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/add-product' }, 'List Products'))
                    )
                ),
                // Links Column 3
                window.Utils.createElement('div', { className: 'footer-links' },
                    window.Utils.createElement('h4', {}, 'Support'),
                    window.Utils.createElement('ul', {},
                        window.Utils.createElement('li', {}, window.Utils.createElement('a', { href: '#/contact' }, 'Contact Support'))
                    )
                )
            ),
            window.Utils.createElement('div', { className: 'footer-bottom' },
                window.Utils.createElement('p', {}, `© ${new Date().getFullYear()} SourceHub Global. All rights reserved.`),
                window.Utils.createElement('div', { className: 'footer-bottom-links flex gap-16' },
                    window.Utils.createElement('a', { href: '#/' }, 'English (US)'),
                    window.Utils.createElement('a', { href: '#/' }, 'USD ($)')
                )
            )
        )
    );
};

