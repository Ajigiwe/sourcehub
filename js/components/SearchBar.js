/**
 * SearchBar Component (Non-ESM Version)
 */
window.SearchBar = function () {
    return window.Utils.createElement('div', { className: 'search-container' },
        window.Utils.createElement('input', {
            type: 'text',
            placeholder: 'Search products, brands, categories...',
            className: 'search-input',
            id: 'global-search'
        }),
        window.Utils.createElement('div', { className: 'search-suggestions', id: 'search-suggestions' })
    );
};
