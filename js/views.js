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
            window.Utils.createElement('div', { className: 'supplier-offerings', style: 'background: var(--secondary-bg); padding: 32px; border-radius: 12px; border: 1px solid var(--border-color);' },
                window.Utils.createElement('h2', { style: 'margin-bottom: 24px; border-bottom: 1px solid var(--border-color); padding-bottom: 16px;' }, 'Available Suppliers'),

                window.Utils.createElement('div', { className: 'offerings-list flex flex-col gap-16' },
                    ...(product.offerings || []).map(offer => {
                        const supplier = suppliers.find(s => s.id === offer.supplierId);

                        return window.Utils.createElement('div', {
                            className: 'offering-card flex justify-between items-center',
                            style: 'background: #fff; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); gap: 24px; flex-wrap: wrap;'
                        },
                            // Supplier Info
                            window.Utils.createElement('div', { className: 'supplier-info', style: 'flex: 1; min-width: 200px;' },
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
                            window.Utils.createElement('div', { className: 'offer-specs', style: 'flex: 1; min-width: 150px; padding: 0;' },
                                offer.specs ? window.Utils.createElement('ul', { style: 'list-style: none; padding: 0; margin: 0 0 8px 0; font-size: 0.95rem; line-height: 1.6;' },
                                    ...Object.entries(offer.specs).map(([k, v]) => window.Utils.createElement('li', {},
                                        window.Utils.createElement('strong', { style: 'color: var(--text-color);' }, `${k}: `),
                                        window.Utils.createElement('span', { style: 'color: var(--text-color-muted);' }, v)
                                    ))
                                ) : '',
                                window.Utils.createElement('p', { className: 'text-sm text-muted', style: 'margin: 0; color: var(--primary-color); font-weight: 500;' }, `Warranty: ${offer.warranty}`)
                            ),

                            // Price and Action
                            window.Utils.createElement('div', { className: 'offer-action', style: 'text-align: right; flex: 1; min-width: 150px;' },
                                window.Utils.createElement('div', { className: 'price-large', style: 'margin-bottom: 12px;' }, `GH₵${offer.price}`),
                                window.Utils.createElement('button', {
                                    className: 'btn-primary',
                                    onclick: () => {
                                        window.location.hash = `#/supplier/${supplier.id}`;
                                    }
                                }, 'View Supplier Profile')
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
            window.Utils.createElement('div', { className: 'brand-hero flex items-center gap-32 flex-wrap', style: 'margin-bottom: 48px;' },
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
    },

    SupplierDetail: async (params) => {
        const supplier = await window.DataService.getSupplierById(params.id);
        if (!supplier) return 'Supplier not found';

        return window.Utils.createElement('div', { className: 'section container' },
            // Hero section for supplier
            window.Utils.createElement('div', { className: 'supplier-profile-hero', style: 'background: #fff; padding: 40px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 48px;' },
                window.Utils.createElement('div', { className: 'flex justify-between items-start flex-wrap gap-32' },
                    window.Utils.createElement('div', { style: 'flex: 1;' },
                        window.Utils.createElement('h1', { style: 'margin:0; font-size: 2.5rem; word-break: break-word;' }, supplier.name),
                        supplier.verified ? window.Utils.createElement('div', { style: 'color: #10b981; font-weight: 500; margin-top: 8px; font-size: 1.1rem;' }, '✓ Verified Supplier') : '',
                        window.Utils.createElement('div', { className: 'flex items-center gap-12', style: 'margin-top: 24px;' },
                            window.StarRating(supplier.rating),
                            window.Utils.createElement('span', { className: 'text-muted', style: 'font-size: 1.1rem;' }, `(${supplier.rating} / 5.0)`)
                        )
                    ),
                    window.Utils.createElement('div', { className: 'supplier-contact-card', style: 'background: var(--bg-secondary); padding: 32px; border-radius: 12px; flex: 1; border: 1px solid var(--border-color);' },
                        window.Utils.createElement('h3', { style: 'margin-bottom: 20px; font-size: 1.25rem; color: var(--primary-dark);' }, 'Direct Contact Details'),
                        window.Utils.createElement('p', { style: 'margin-bottom: 16px; font-size: 1rem; display: flex; gap: 8px;' },
                            window.Utils.createElement('strong', { style: 'min-width: 80px;' }, 'Address:'),
                            window.Utils.createElement('span', {}, supplier.address)
                        ),
                        window.Utils.createElement('p', { style: 'margin-bottom: 16px; font-size: 1rem; display: flex; gap: 8px;' },
                            window.Utils.createElement('strong', { style: 'min-width: 80px;' }, 'Email:'),
                            window.Utils.createElement('a', { href: `mailto:${supplier.email}`, style: 'color: var(--primary-color); text-decoration: none; font-weight: 500;' }, supplier.email)
                        ),
                        window.Utils.createElement('p', { style: 'margin-bottom: 24px; font-size: 1rem; display: flex; gap: 8px;' },
                            window.Utils.createElement('strong', { style: 'min-width: 80px;' }, 'Phone:'),
                            window.Utils.createElement('a', { href: `tel:${supplier.phone.replace(/\s/g, '')}`, style: 'color: var(--primary-color); text-decoration: none; font-weight: 500;' }, supplier.phone)
                        ),
                        window.Utils.createElement('div', { className: 'flex flex-wrap gap-12' },
                            ...(Object.entries(supplier.socials || {}).map(([platform, url]) =>
                                window.Utils.createElement('a', {
                                    href: url,
                                    target: '_blank',
                                    className: 'btn-outline',
                                    style: 'padding: 8px 16px; font-size: 0.9rem; border: 1px solid var(--border-color); border-radius: 6px; text-decoration: none; color: var(--text-color); background: #fff;'
                                }, platform.charAt(0).toUpperCase() + platform.slice(1))
                            ))
                        )
                    )
                )
            ),

            // Community Reviews Section
            (() => {
                // Get user reviews from localStorage
                const savedReviews = JSON.parse(localStorage.getItem(`reviews-${supplier.id}`) || '[]');
                const allReviews = [...(supplier.reviews || []), ...savedReviews];

                const reviewsContainer = window.Utils.createElement('div', { className: 'reviews-section', style: 'max-width: 850px; margin: 0 auto;' },
                    window.Utils.createElement('h2', { style: 'margin-bottom: 32px; text-align: center; font-size: 1.75rem;' }, `Community Reviews & Feedback (${allReviews.length})`)
                );

                // Reviews list
                const reviewsList = window.Utils.createElement('div', { className: 'reviews-list flex flex-col gap-24' });
                allReviews.forEach(review => reviewsList.appendChild(window.ReviewItem(review)));
                reviewsContainer.appendChild(reviewsList);

                // Review Form
                const formWrapper = window.Utils.createElement('div', {
                    style: 'margin-top: 32px; padding: 32px; background: var(--secondary-bg); border-radius: 12px; border: 1px dashed var(--border-color);'
                });

                let selectedRating = 0;

                // Star selector
                const starSelector = window.Utils.createElement('div', { style: 'display: flex; gap: 8px; margin-bottom: 16px; justify-content: center;' });
                for (let i = 1; i <= 5; i++) {
                    const star = window.Utils.createElement('span', {
                        style: 'font-size: 2rem; cursor: pointer; color: var(--border-color); transition: color 0.15s ease;',
                        onclick: () => {
                            selectedRating = i;
                            starSelector.querySelectorAll('span').forEach((s, idx) => {
                                s.style.color = idx < i ? '#f59e0b' : 'var(--border-color)';
                            });
                        }
                    }, '★');
                    star.addEventListener('mouseenter', () => {
                        starSelector.querySelectorAll('span').forEach((s, idx) => {
                            s.style.color = idx <= (Array.from(starSelector.children).indexOf(star)) ? '#f59e0b' : 'var(--border-color)';
                        });
                    });
                    starSelector.appendChild(star);
                }
                starSelector.addEventListener('mouseleave', () => {
                    starSelector.querySelectorAll('span').forEach((s, idx) => {
                        s.style.color = idx < selectedRating ? '#f59e0b' : 'var(--border-color)';
                    });
                });

                const nameInput = window.Utils.createElement('input', {
                    type: 'text', placeholder: 'Your name',
                    style: 'width: 100%; padding: 12px 16px; border: 1px solid var(--border-color); border-radius: 8px; font-size: 1rem; margin-bottom: 12px;'
                });

                const commentInput = window.Utils.createElement('textarea', {
                    placeholder: 'Share your experience with this supplier...',
                    rows: 4,
                    style: 'width: 100%; padding: 12px 16px; border: 1px solid var(--border-color); border-radius: 8px; font-size: 1rem; margin-bottom: 16px; resize: vertical;'
                });

                const submitBtn = window.Utils.createElement('button', {
                    className: 'btn-primary',
                    style: 'width: 100%; padding: 14px; font-size: 1rem;',
                    onclick: () => {
                        const name = nameInput.value.trim();
                        const comment = commentInput.value.trim();
                        if (!name || !comment || selectedRating === 0) {
                            alert('Please fill in your name, select a star rating, and write a comment.');
                            return;
                        }

                        const newReview = {
                            user: name,
                            rating: selectedRating,
                            comment: comment,
                            date: new Date().toISOString().split('T')[0]
                        };

                        // Save to localStorage
                        const existing = JSON.parse(localStorage.getItem(`reviews-${supplier.id}`) || '[]');
                        existing.push(newReview);
                        localStorage.setItem(`reviews-${supplier.id}`, JSON.stringify(existing));

                        // Add to DOM immediately
                        reviewsList.appendChild(window.ReviewItem(newReview));

                        // Reset form
                        nameInput.value = '';
                        commentInput.value = '';
                        selectedRating = 0;
                        starSelector.querySelectorAll('span').forEach(s => { s.style.color = 'var(--border-color)'; });

                        // Update count
                        reviewsContainer.querySelector('h2').textContent = `Community Reviews & Feedback (${existing.length + (supplier.reviews || []).length})`;
                    }
                }, 'Submit Review');

                formWrapper.appendChild(window.Utils.createElement('h3', { style: 'text-align: center; margin-bottom: 16px;' }, 'Write a Review'));
                formWrapper.appendChild(starSelector);
                formWrapper.appendChild(nameInput);
                formWrapper.appendChild(commentInput);
                formWrapper.appendChild(submitBtn);
                reviewsContainer.appendChild(formWrapper);

                return reviewsContainer;
            })()
        );
    }
};
