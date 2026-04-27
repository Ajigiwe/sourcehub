/**
 * App Main Bootstrap (Non-ESM Version)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Render Layout
    const header = window.Header();
    const footer = window.Footer();
    document.getElementById('main-header').appendChild(header);
    document.getElementById('main-footer').appendChild(footer);

    // Initialize Shortlist Count
    const shortlist = window.Utils.Storage.get('shortlist') || [];
    const countEl = document.getElementById('shortlist-count');
    if (countEl) countEl.textContent = shortlist.length;

    // Route Configuration
    const routes = [
        { path: '/', render: window.Views.Home },
        { path: '/categories', render: window.Views.Categories },
        { path: '/categories/:slug', render: window.Views.CategoryDetail },
        { path: '/brands', render: window.Views.Brands },
        { path: '/brands/:slug', render: window.Views.BrandDetail },
        { path: '/products', render: window.Views.Products },
        { path: '/products/:id', render: window.Views.ProductDetail },

        { path: '/supplier/:id', render: window.Views.SupplierDetail },
        { path: '/add-product', render: window.Views.AddProduct },
        { path: '/add-supplier', render: window.Views.AddSupplier },


        { path: '/shortlist', render: window.Views.Shortlist },
        { path: '/contact', render: window.Views.Contact }
    ];

    // Initialize Router
    const router = new window.Router(routes);

    // Search Box Listener
    setupSearch();
});

function setupSearch() {
    const searchInput = document.getElementById('global-search');
    const suggestionsEl = document.getElementById('search-suggestions');
    if (!searchInput || !suggestionsEl) return;

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsEl.contains(e.target)) {
            suggestionsEl.classList.remove('active');
        }
    });

    searchInput.addEventListener('input', window.Utils.debounce(async (e) => {
        const query = e.target.value.trim();
        if (query.length < 2) {
            suggestionsEl.classList.remove('active');
            return;
        }

        const results = await window.Search.query(query);

        if (results.length > 0) {
            suggestionsEl.innerHTML = '';
            results.slice(0, 8).forEach(item => {
                const type = item.categoryId ? 'Product' : (item.website ? 'Brand' : 'Category');
                const icon = item.images ? '📦' : (item.logo ? '🏢' : '📂');
                const link = item.id.startsWith('prod') ? `#/products/${item.id}` : (item.slug ? `#/${type.toLowerCase()}s/${item.slug}` : '#');

                const el = document.createElement('div');
                el.className = 'suggestion-item';
                el.innerHTML = `
                    <span class="suggestion-icon">${icon}</span>
                    <div class="suggestion-info">
                        <strong>${item.name}</strong>
                        <span class="suggestion-type">${type}</span>
                    </div>
                `;
                el.onclick = () => {
                    window.location.hash = link;
                    suggestionsEl.classList.remove('active');
                    searchInput.value = '';
                };
                suggestionsEl.appendChild(el);
            });
            suggestionsEl.classList.add('active');
        } else {
            suggestionsEl.innerHTML = '<div class="suggestion-item">No results found</div>';
            suggestionsEl.classList.add('active');
        }
    }, 300));
}
