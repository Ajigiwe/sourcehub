/**
 * BrandCard Component (Non-ESM Version)
 */
window.BrandCard = function (brand) {
    const { name, slug, logo, tagline, country } = brand;

    return window.Utils.createElement('div', { className: 'brand-card' },
        window.Utils.createElement('div', { className: 'brand-logo' },
            window.Utils.createElement('img', { src: logo, alt: name, loading: 'lazy' })
        ),
        window.Utils.createElement('div', { className: 'brand-info' },
            window.Utils.createElement('div', { className: 'brand-header' },
                window.Utils.createElement('h3', { className: 'brand-name' }, name),
                window.Utils.createElement('span', { className: 'country-tag' }, country)
            ),
            window.Utils.createElement('p', { className: 'brand-tagline' }, tagline),
            window.Utils.createElement('a', {
                href: `#/brands/${slug}`,
                className: 'btn-outline'
            }, 'View Brand')
        )
    );
};
