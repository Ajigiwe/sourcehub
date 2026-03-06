/**
 * ProductCard Component (Non-ESM Version)
 */
window.ProductCard = function (product) {
    const { id, name, priceRange, images, brandId } = product;
    const brandName = product.brandName || brandId;

    const isShortlisted = (window.Utils.Storage.get('shortlist') || []).includes(id);

    const toggleShortlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let shortlist = window.Utils.Storage.get('shortlist') || [];
        if (shortlist.includes(id)) {
            shortlist = shortlist.filter(sid => sid !== id);
        } else {
            shortlist.push(id);
        }
        window.Utils.Storage.set('shortlist', shortlist);

        // Update UI
        const btn = e.currentTarget;
        btn.classList.toggle('active');
        btn.textContent = shortlist.includes(id) ? '★' : '☆';

        // Update header count
        const countEl = document.getElementById('shortlist-count');
        if (countEl) countEl.textContent = shortlist.length;
    };

    const getPriceDisplay = () => {
        if (!product.offerings || product.offerings.length === 0) return 'Price Unavailable';
        const minPrice = Math.min(...product.offerings.map(o => o.price));
        return `From GH₵${minPrice}`;
    };

    const getOfferCount = () => {
        const count = product.offerings ? product.offerings.length : 0;
        return `${count} Supplier${count !== 1 ? 's' : ''}`;
    };

    return window.Utils.createElement('div', { className: 'product-card', onclick: () => window.location.hash = `#/products/${id}` },
        window.Utils.createElement('div', { className: 'product-image' },
            window.Utils.createElement('img', { src: images[0], alt: name, loading: 'lazy' }),
            window.Utils.createElement('button', {
                className: `shortlist-toggle ${isShortlisted ? 'active' : ''}`,
                onclick: toggleShortlist,
                title: 'Toggle Shortlist'
            }, isShortlisted ? '★' : '☆')
        ),
        window.Utils.createElement('div', { className: 'product-info' },
            window.Utils.createElement('div', { className: 'flex justify-between items-center', style: 'margin-bottom: 8px;' },
                window.Utils.createElement('span', { className: 'brand-badge' }, brandName),
                window.Utils.createElement('span', { style: 'font-size: 0.8rem; color: var(--primary-color); font-weight: 500;' }, getOfferCount())
            ),
            window.Utils.createElement('h3', { className: 'product-title' }, name),
            window.Utils.createElement('div', { className: 'product-footer' },
                window.Utils.createElement('span', { className: 'price' }, getPriceDisplay()),
                window.Utils.createElement('a', {
                    href: `#/products/${id}`,
                    className: 'btn-view'
                }, 'View Details')
            )
        )
    );
};
