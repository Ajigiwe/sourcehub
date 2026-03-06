/**
 * CategoryTile Component (Non-ESM Version)
 */
window.CategoryTile = function (category) {
    const { name, slug, icon, image } = category;

    return window.Utils.createElement('a', {
        href: `#/categories/${slug}`,
        className: 'category-tile',
        style: image ? `background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${image}'); background-size: cover; background-position: center; color: white; border: none;` : ''
    },
        window.Utils.createElement('span', { className: 'category-name', style: image ? 'color: white; font-weight: 600; font-size: 1.2rem;' : '' }, name)
    );
};
