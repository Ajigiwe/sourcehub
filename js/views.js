/**
 * Views for SourceHub (Non-ESM Version)
 */

window.Views = {
    Home: async () => {
        const categories = await window.DataService.getCategories();

        const hero = window.Utils.createElement('section', { className: 'hero section bg-secondary' },
            window.Utils.createElement('div', { className: 'container text-center' },
                window.Utils.createElement('h1', { className: 'hero-title' }, 'Find Your Next Global Supplier'),
                window.Utils.createElement('p', { className: 'hero-subtitle' }, 'The fastest way to discover products and connect with manufacturers.'),
                // Update hero stats for new scale
                window.Utils.createElement('div', { className: 'hero-stats' },
                    window.Utils.createElement('div', { className: 'stat-item' }, window.Utils.createElement('strong', {}, '3'), ' Verified Suppliers'),
                    window.Utils.createElement('div', { className: 'stat-item' }, window.Utils.createElement('strong', {}, '6'), ' Premium Brands'),
                    window.Utils.createElement('div', { className: 'stat-item' }, window.Utils.createElement('strong', {}, '4'), ' Core Categories')
                )
            )
        );

        const categoriesSection = window.Utils.createElement('section', { className: 'section container' },
            window.Utils.createElement('h2', { className: 'section-title' }, 'Choose a Category to Begin Sourcing'),
            window.Utils.createElement('div', { className: 'category-grid grid' },
                ...categories.map(c => window.CategoryTile(c))
            )
        );

        return window.Utils.createElement('div', {}, hero, categoriesSection);
    },

    Products: async () => {
        const products = await window.DataService.getProducts();
        const categories = await window.DataService.getCategories();
        const brands = await window.DataService.getBrands();

        let filteredProducts = [...products];

        const container = window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('div', { className: 'section-header flex justify-between items-center', style: 'margin-bottom: 32px; flex-wrap: wrap; gap: 16px;' },
                window.Utils.createElement('h1', { style: 'margin: 0;' }, 'Product Catalog'),
                window.Utils.createElement('div', { className: 'filters flex gap-16' },
                    window.Utils.createElement('select', {
                        className: 'search-input',
                        id: 'filter-category',
                        onchange: (e) => applyFilters()
                    },
                        window.Utils.createElement('option', { value: '' }, 'All Categories'),
                        ...categories.map(c => window.Utils.createElement('option', { value: c.id }, c.name))
                    ),
                    window.Utils.createElement('select', {
                        className: 'search-input',
                        id: 'filter-brand',
                        onchange: (e) => applyFilters()
                    },
                        window.Utils.createElement('option', { value: '' }, 'All Brands'),
                        ...brands.map(b => window.Utils.createElement('option', { value: b.id }, b.name))
                    )
                )
            ),
            window.Utils.createElement('div', { className: 'product-grid grid', id: 'products-grid-container' },
                ...filteredProducts.map(window.ProductCard)
            )
        );

        function applyFilters() {
            const catFilter = document.getElementById('filter-category').value;
            const brandFilter = document.getElementById('filter-brand').value;

            filteredProducts = products.filter(p => {
                const matchCat = catFilter ? p.categoryId === catFilter : true;
                const matchBrand = brandFilter ? p.brandId === brandFilter : true;
                return matchCat && matchBrand;
            });

            const grid = document.getElementById('products-grid-container');
            if (grid) {
                grid.innerHTML = '';
                filteredProducts.forEach(p => {
                    grid.appendChild(window.ProductCard(p));
                });
            }
        }

        return container;
    },

    ProductDetail: async (params) => {
        const product = await window.DataService.getProductById(params.id);
        if (!product) return 'Product not found';

        const brands = await window.DataService.getBrands();
        const suppliers = await window.DataService.getSuppliers();
        const brand = brands.find(b => b.id === product.brandId);

        return window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('div', { className: 'product-detail-grid', style: 'margin-bottom: 48px;' },
                window.Utils.createElement('div', { className: 'product-gallery' },
                    window.Utils.createElement('img', { src: product.images[0], alt: product.name })
                ),
                window.Utils.createElement('div', { className: 'product-main-info' },
                    window.Utils.createElement('span', { className: 'brand-badge' }, brand ? brand.name : 'Unknown Brand'),
                    window.Utils.createElement('h1', {}, product.name),
                    window.Utils.createElement('p', { className: 'text-muted' }, product.description),
                    brand ? window.Utils.createElement('div', { className: 'flex items-center gap-16', style: 'margin-top: 16px;' },
                        window.Utils.createElement('img', { src: brand.logo, style: 'height: 32px;' }),
                        window.Utils.createElement('a', { href: `#/brands/${brand.slug}`, className: 'btn-link' }, 'View Brand Profile')
                    ) : ''
                )
            ),

            // Supplier Offerings Section
            window.Utils.createElement('div', { className: 'supplier-offerings', style: 'background: var(--bg-secondary); padding: 32px; border-radius: 12px; border: 1px solid var(--border-color);' },
                window.Utils.createElement('h2', { style: 'margin-bottom: 24px; border-bottom: 1px solid var(--border-color); padding-bottom: 16px;' }, 'Available Suppliers'),

                window.Utils.createElement('div', { className: 'offerings-list flex flex-col gap-16' },
                    ...(product.offerings || []).map(offer => {
                        const supplier = suppliers.find(s => s.id === offer.supplierId);

                        return window.Utils.createElement('div', {
                            className: 'offering-card flex justify-between items-center',
                            style: 'background: #fff; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); gap: 24px; flex-wrap: wrap;'
                        },
                            // Supplier Info
                            window.Utils.createElement('div', { className: 'supplier-info', style: 'flex: 1; min-width: 250px;' },
                                window.Utils.createElement('h3', { style: 'margin-bottom: 8px;' },
                                    supplier ? supplier.name : 'Unknown Supplier',
                                    supplier && supplier.verified ? window.Utils.createElement('span', { style: 'color: #10b981; margin-left:8px; font-size: 0.9rem;' }, '✓ Verified') : ''
                                ),
                                window.Utils.createElement('div', { className: 'flex gap-16 text-sm text-muted' },
                                    window.Utils.createElement('span', {}, `Rating: ${supplier ? supplier.rating : 'N/A'} ★`),
                                    window.Utils.createElement('span', {}, `Condition: ${offer.condition}`)
                                )
                            ),

                            // Specs & Warranty
                            window.Utils.createElement('div', { className: 'offer-specs', style: 'flex: 1; min-width: 200px; padding: 0 16px;' },
                                offer.specs ? window.Utils.createElement('ul', { style: 'list-style: none; padding: 0; margin: 0 0 8px 0; font-size: 0.95rem; line-height: 1.6;' },
                                    ...Object.entries(offer.specs).map(([k, v]) => window.Utils.createElement('li', {},
                                        window.Utils.createElement('strong', { style: 'color: var(--text-color);' }, `${k}: `),
                                        window.Utils.createElement('span', { style: 'color: var(--text-color-muted);' }, v)
                                    ))
                                ) : '',
                                window.Utils.createElement('p', { className: 'text-sm text-muted', style: 'margin: 0; color: var(--primary-color); font-weight: 500;' }, `Warranty: ${offer.warranty}`)
                            ),

                            // Price and Action
                            window.Utils.createElement('div', { className: 'offer-action', style: 'text-align: right; min-width: 200px;' },
                                window.Utils.createElement('div', { className: 'price-large', style: 'margin-bottom: 12px;' }, `GH₵${offer.price}`),
                                window.Utils.createElement('button', {
                                    className: 'btn-primary',
                                    onclick: () => {
                                        document.body.appendChild(window.ContactModal(supplier ? supplier.name : 'Supplier'));
                                    }
                                }, 'Contact Supplier')
                            )
                        );
                    })
                )
            )
        );
    },

    Brands: async () => {
        const brands = await window.DataService.getBrands();
        return window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('h1', {}, 'Supplier Directory'),
            window.Utils.createElement('div', { className: 'brand-grid grid' },
                ...brands.map(window.BrandCard)
            )
        );
    },

    BrandDetail: async (params) => {
        const brand = await window.DataService.getBrandBySlug(params.slug);
        if (!brand) return 'Brand not found';
        const products = await window.DataService.getProductsByBrand(brand.id);

        return window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('div', { className: 'brand-hero flex items-center gap-32', style: 'margin-bottom: 48px;' },
                window.Utils.createElement('img', { src: brand.logo, alt: brand.name, style: 'width: 120px; height: 120px; border-radius: 8px;' }),
                window.Utils.createElement('div', {},
                    window.Utils.createElement('h1', {}, brand.name),
                    window.Utils.createElement('p', {}, brand.about),
                    window.Utils.createElement('div', { className: 'brand-contact-info', style: 'margin-top: 16px;' },
                        window.Utils.createElement('a', { href: brand.website, target: '_blank', className: 'btn-link' }, 'Visit Website')
                    )
                )
            ),
            window.Utils.createElement('h2', {}, 'Products from this Brand'),
            window.Utils.createElement('div', { className: 'product-grid grid', style: 'margin-top: 24px;' },
                ...products.map(window.ProductCard)
            )
        );
    },

    Categories: async () => {
        const categories = await window.DataService.getCategories();
        return window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('h1', {}, 'Browse Categories'),
            window.Utils.createElement('div', { className: 'category-grid grid' },
                ...categories.map(window.CategoryTile)
            )
        );
    },

    CategoryDetail: async (params) => {
        const category = await window.DataService.getCategoryBySlug(params.slug);
        if (!category) return 'Category not found';

        // Fetch brands that fall under this category, NOT products.
        const brands = await window.DataService.getBrandsByCategory(category.id);

        return window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('div', { className: 'flex items-center gap-16', style: 'margin-bottom: 32px;' },
                window.Utils.createElement('span', { style: 'font-size: 3rem;' }, category.icon),
                window.Utils.createElement('div', {},
                    window.Utils.createElement('h1', { style: 'margin:0;' }, category.name),
                    window.Utils.createElement('p', { className: 'text-muted' }, category.description)
                )
            ),
            window.Utils.createElement('h2', { style: 'margin-bottom: 24px;' }, 'Select a Brand'),
            window.Utils.createElement('div', { className: 'brand-grid grid' },
                ...brands.map(window.BrandCard)
            )
        );
    },

    Shortlist: async () => {
        const shortlistIds = window.Utils.Storage.get('shortlist') || [];
        const allProducts = await window.DataService.getProducts();
        const products = allProducts.filter(p => shortlistIds.includes(p.id));

        return window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('h1', {}, 'My Shortlist'),
            products.length > 0
                ? window.Utils.createElement('div', { className: 'product-grid grid', style: 'margin-top: 32px;' },
                    ...products.map(window.ProductCard)
                )
                : window.Utils.createElement('div', { className: 'text-center', style: 'padding: 64px 0;' },
                    window.Utils.createElement('p', {}, 'Your shortlist is empty.'),
                    window.Utils.createElement('a', { href: '#/products', className: 'btn-primary', style: 'display: inline-block; margin-top: 16px;' }, 'Browse Products')
                )
        );
    },

    Contact: async () => {
        return window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('div', { className: 'contact-page-content', style: 'max-width: 600px; margin: 0 auto;' },
                window.Utils.createElement('h1', { className: 'text-center' }, 'Platform Inquiry'),
                window.Utils.createElement('p', { className: 'text-center text-muted' }, 'Have a question about the platform or want to list your brand?'),
                window.Utils.createElement('form', {
                    style: 'margin-top: 32px;',
                    onsubmit: (e) => {
                        e.preventDefault();
                        e.target.innerHTML = '<div class="success-message"><h3>Thanks for reaching out!</h3><p>We will get back to you soon.</p></div>';
                    }
                },
                    window.Utils.createElement('div', { className: 'form-group' },
                        window.Utils.createElement('label', {}, 'Name'),
                        window.Utils.createElement('input', { type: 'text', required: true })
                    ),
                    window.Utils.createElement('div', { className: 'form-group' },
                        window.Utils.createElement('label', {}, 'Email'),
                        window.Utils.createElement('input', { type: 'email', required: true })
                    ),
                    window.Utils.createElement('div', { className: 'form-group' },
                        window.Utils.createElement('label', {}, 'Interest'),
                        window.Utils.createElement('select', { className: 'search-input' },
                            window.Utils.createElement('option', {}, 'Buying / Sourcing'),
                            window.Utils.createElement('option', {}, 'Selling / Supplier'),
                            window.Utils.createElement('option', {}, 'Partnership'),
                            window.Utils.createElement('option', {}, 'Other')
                        )
                    ),
                    window.Utils.createElement('div', { className: 'form-group' },
                        window.Utils.createElement('label', {}, 'Message'),
                        window.Utils.createElement('textarea', { rows: 5, required: true })
                    ),
                    window.Utils.createElement('button', { type: 'submit', className: 'btn-primary btn-large' }, 'Send Message')
                )
            )
        );
    }
};
