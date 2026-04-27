/**
 * BrandCard Component (Non-ESM Version)
 */
window.BrandCard = function (brand) {
    const { name, slug, logo, tagline, country } = brand;

    return window.Utils.createElement('div', { 
        className: 'brand-card',
        onclick: () => window.location.hash = `#/brands/${slug}`
    },
        window.Utils.createElement('div', { className: 'brand-logo' },
            window.Utils.createElement('img', {
                src: logo,
                alt: name,
                loading: 'lazy',
                onerror: (e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`; }
            })
        ),
        window.Utils.createElement('div', { className: 'brand-info' },
            window.Utils.createElement('div', { className: 'brand-header' },
                window.Utils.createElement('h3', { className: 'brand-name', style: 'margin: 0;' }, name),
                window.Utils.createElement('span', { className: 'country-tag' }, country || 'Global')
            ),
            window.Utils.createElement('p', { className: 'brand-tagline', style: 'margin: 4px 0 0 0; color: var(--text-muted); font-size: 0.9rem;' }, tagline || 'Premium Sourcing Partner'),
            window.Utils.createElement('div', { style: 'margin-top: 12px;' },
                window.Utils.createElement('span', { className: 'btn-view', style: 'font-size: 0.85rem;' }, 'View Brand Profile →')
            )
        )
    );
};
