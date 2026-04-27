/**
 * Views for SourceHub (Non-ESM Version)
 */

window.Views = {
    Home: async () => {
        const categories = await window.DataService.getCategories();

        // --- Hero Section ---
        const hero = window.Utils.createElement('section', { 
            className: 'hero',
            style: 'padding: 100px 0; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; position: relative; overflow: hidden;'
        },
            // Background Decorative Elements
            window.Utils.createElement('div', { style: 'position: absolute; top: -10%; right: -5%; width: 400px; height: 400px; background: rgba(37, 99, 235, 0.1); filter: blur(100px); border-radius: 50%;' }),
            
            window.Utils.createElement('div', { className: 'container grid', style: 'grid-template-columns: 1.2fr 0.8fr; align-items: center; gap: 64px;' },
                window.Utils.createElement('div', { className: 'hero-content' },
                    window.Utils.createElement('span', { style: 'color: var(--accent-color); font-weight: 600; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; margin-bottom: 16px; display: block;' }, 'Global B2B Sourcing Platform'),
                    window.Utils.createElement('h1', { style: 'font-size: 4rem; line-height: 1.1; font-weight: 800; margin-bottom: 24px;' }, 
                        'Source Products ',
                        window.Utils.createElement('span', { style: 'color: var(--accent-color);' }, 'Directly'),
                        ' from the Source'
                    ),
                    window.Utils.createElement('p', { style: 'font-size: 1.25rem; opacity: 0.8; margin-bottom: 40px; max-width: 600px;' }, 
                        'The professional gateway for bulk vehicle and mobile electronics procurement. Connect with verified global manufacturers in one centralized hub.'
                    ),
                    window.Utils.createElement('div', { className: 'flex gap-16' },
                        window.Utils.createElement('a', { href: '#/products', className: 'btn-primary', style: 'padding: 16px 32px; font-size: 1.1rem;' }, 'Browse Catalog'),
                        window.Utils.createElement('a', { href: '#/categories', className: 'btn-outline', style: 'color: white; border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.05); padding: 16px 32px; font-size: 1.1rem; backdrop-filter: blur(8px);' }, 'Explore Categories')
                    )
                ),
                window.Utils.createElement('div', { className: 'hero-visual', style: 'position: relative;' },
                    window.Utils.createElement('img', { 
                        src: 'assets/products/toyota_hilux_2024.png', 
                        style: 'width: 120%; transform: translateX(10%) rotate(-5deg); filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));' 
                    })
                )
            )
        );

        // --- Trust Bar ---
        const trustBar = window.Utils.createElement('section', { style: 'padding: 32px 0; background: var(--bg-secondary); border-bottom: 1px solid var(--border-color);' },
            window.Utils.createElement('div', { className: 'container' },
                window.Utils.createElement('p', { style: 'text-align: center; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 24px;' }, 'Trusted by industry leaders worldwide'),
                window.Utils.createElement('div', { className: 'flex justify-between items-center', style: 'gap: 48px; flex-wrap: wrap; justify-content: center; opacity: 0.7;' },
                    window.Utils.createElement('img', { src: 'https://www.vectorlogo.zone/logos/toyota/toyota-ar21.svg', style: 'height: 24px;' }),
                    window.Utils.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/2560px-Mercedes-Benz_Logo_2010.svg.png', style: 'height: 24px;' }),
                    window.Utils.createElement('img', { src: 'https://www.vectorlogo.zone/logos/apple/apple-ar21.svg', style: 'height: 24px;' }),
                    window.Utils.createElement('img', { src: 'https://www.vectorlogo.zone/logos/samsung/samsung-ar21.svg', style: 'height: 24px;' })
                )
            )
        );

        // --- Categories Section ---
        const categoriesSection = window.Utils.createElement('section', { className: 'section container' },
            window.Utils.createElement('div', { className: 'section-header', style: 'margin-bottom: 48px; text-align: center;' },
                window.Utils.createElement('h2', { style: 'font-size: 2.5rem; margin-bottom: 16px;' }, 'Strategic Sourcing Categories'),
                window.Utils.createElement('p', { className: 'text-muted', style: 'max-width: 600px; margin: 0 auto;' }, 'Specialized procurement channels for high-demand global commodities.')
            ),
            window.Utils.createElement('div', { className: 'category-grid' },
                ...categories.map(c => window.CategoryTile(c))
            )
        );

        // --- How It Works ---
        const howItWorks = window.Utils.createElement('section', { style: 'padding: 100px 0; background: var(--white);' },
            window.Utils.createElement('div', { className: 'container' },
                window.Utils.createElement('h2', { style: 'text-align: center; margin-bottom: 64px; font-size: 2.5rem;' }, 'Professional Sourcing Workflow'),
                window.Utils.createElement('div', { className: 'grid', style: 'grid-template-columns: repeat(3, 1fr); gap: 48px;' },
                    [
                        { step: '01', title: 'Discover', desc: 'Browse our curated catalog of premium brands and verified global suppliers.' },
                        { step: '02', title: 'Connect', desc: 'Engage directly with manufacturers via WhatsApp for instant quotes and lead times.' },
                        { step: '03', title: 'Procure', desc: 'Finalize terms, verify documentation, and secure your inventory shipments.' }
                    ].map(item => window.Utils.createElement('div', { className: 'step-card' },
                        window.Utils.createElement('span', { style: 'font-size: 3rem; font-weight: 900; color: var(--accent-color); opacity: 0.2; display: block; margin-bottom: -20px;' }, item.step),
                        window.Utils.createElement('h3', { style: 'font-size: 1.5rem; margin-bottom: 16px; position: relative;' }, item.title),
                        window.Utils.createElement('p', { className: 'text-muted' }, item.desc)
                    ))
                )
            )
        );

        return window.Utils.createElement('div', {}, hero, trustBar, categoriesSection, howItWorks);
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
                    window.Utils.createElement('img', {
                        src: product.images[0],
                        alt: product.name,
                        onerror: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=Product&background=f3f4f6&color=9ca3af&size=800'; }
                    })
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
                                window.Utils.createElement('a', {
                                    href: supplier && supplier.whatsapp ? supplier.whatsapp : '#',
                                    target: '_blank',
                                    className: 'btn-primary',
                                    style: 'background: #25d366; border-color: #25d366; text-decoration: none; display: inline-block;'
                                }, 'WhatsApp Supplier')
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
    },

    AddProduct: async () => {
        const categories = await window.DataService.getCategories();
        const brands = await window.DataService.getBrands();
        const suppliers = await window.DataService.getSuppliers();

        let imageDataUrl = '';
        let offeringCount = 0;

        const container = window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('h1', { style: 'margin-bottom: 8px;' }, 'Add New Product'),
            window.Utils.createElement('p', { className: 'text-muted', style: 'margin-bottom: 32px;' }, 'Fill in the details below to list a new product on SourceHub.')
        );

        const form = window.Utils.createElement('form', {
            style: 'max-width: 800px; background: #fff; padding: 32px; border-radius: 12px; border: 1px solid var(--border-color);',
            onsubmit: (e) => {
                e.preventDefault();

                // Gather form data
                const name = form.querySelector('#ap-name').value.trim();
                const categoryId = form.querySelector('#ap-category').value;
                const brandId = form.querySelector('#ap-brand').value;
                const description = form.querySelector('#ap-description').value.trim();

                if (!name || !categoryId || !brandId || !description) {
                    alert('Please fill in all required fields.');
                    return;
                }
                if (!imageDataUrl) {
                    alert('Please upload a product image.');
                    return;
                }

                // Gather offerings
                const offeringEls = form.querySelectorAll('.offering-row');
                const offerings = [];
                offeringEls.forEach(row => {
                    const supplierId = row.querySelector('.of-supplier').value;
                    const price = parseFloat(row.querySelector('.of-price').value);
                    const condition = row.querySelector('.of-condition').value;
                    const warranty = row.querySelector('.of-warranty').value.trim();

                    // Gather specs
                    const specInputs = row.querySelectorAll('.spec-row');
                    const specs = {};
                    specInputs.forEach(sr => {
                        const key = sr.querySelector('.spec-key').value.trim();
                        const val = sr.querySelector('.spec-val').value.trim();
                        if (key && val) specs[key] = val;
                    });

                    if (supplierId && price && condition && warranty) {
                        offerings.push({ supplierId, price, condition, warranty, specs });
                    }
                });

                if (offerings.length === 0) {
                    alert('Please add at least one supplier offering.');
                    return;
                }

                const productId = 'p-user-' + Date.now();
                const newProduct = {
                    id: productId,
                    name,
                    brandId,
                    categoryId,
                    images: [imageDataUrl],
                    description,
                    offerings
                };

                // Save to localStorage
                const existing = JSON.parse(localStorage.getItem('sourcehub-user-products') || '[]');
                existing.push(newProduct);
                localStorage.setItem('sourcehub-user-products', JSON.stringify(existing));

                // Navigate to the new product
                window.location.hash = `#/products/${productId}`;
            }
        });

        // -- Product Name --
        const nameGroup = window.Utils.createElement('div', { className: 'form-group' },
            window.Utils.createElement('label', { htmlFor: 'ap-name' }, 'Product Name *'),
            window.Utils.createElement('input', { type: 'text', id: 'ap-name', required: true, className: 'search-input', placeholder: 'e.g. MacBook Pro 16"' })
        );

        // -- Category --
        const catSelect = window.Utils.createElement('select', { id: 'ap-category', className: 'search-input', required: true },
            window.Utils.createElement('option', { value: '' }, '-- Select Category --'),
            ...categories.map(c => window.Utils.createElement('option', { value: c.id }, c.name))
        );
        const catGroup = window.Utils.createElement('div', { className: 'form-group' },
            window.Utils.createElement('label', { htmlFor: 'ap-category' }, 'Category *'),
            catSelect
        );

        // -- Brand (filtered by category) --
        const brandSelect = window.Utils.createElement('select', { id: 'ap-brand', className: 'search-input', required: true },
            window.Utils.createElement('option', { value: '' }, '-- Select Brand --'),
            ...brands.map(b => window.Utils.createElement('option', { value: b.id }, b.name))
        );
        catSelect.addEventListener('change', () => {
            const selCat = catSelect.value;
            brandSelect.innerHTML = '';
            brandSelect.appendChild(window.Utils.createElement('option', { value: '' }, '-- Select Brand --'));
            const filtered = selCat ? brands.filter(b => b.categoryIds.includes(selCat)) : brands;
            filtered.forEach(b => brandSelect.appendChild(window.Utils.createElement('option', { value: b.id }, b.name)));
        });
        const brandGroup = window.Utils.createElement('div', { className: 'form-group' },
            window.Utils.createElement('label', { htmlFor: 'ap-brand' }, 'Brand *'),
            brandSelect
        );

        // -- Description --
        const descGroup = window.Utils.createElement('div', { className: 'form-group' },
            window.Utils.createElement('label', { htmlFor: 'ap-description' }, 'Description *'),
            window.Utils.createElement('textarea', { id: 'ap-description', rows: 3, required: true, className: 'search-input', placeholder: 'Brief product description...', style: 'resize: vertical;' })
        );

        // -- Image Upload --
        const imagePreview = window.Utils.createElement('div', {
            id: 'image-preview',
            style: 'width: 100%; height: 200px; border: 2px dashed var(--border-color); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-top: 8px; background: var(--secondary-bg); overflow: hidden; cursor: pointer;'
        }, window.Utils.createElement('span', { className: 'text-muted' }, '📷 Click to upload image'));

        const fileInput = window.Utils.createElement('input', {
            type: 'file', accept: 'image/*', style: 'display: none;',
            onchange: (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                    imageDataUrl = ev.target.result;
                    imagePreview.innerHTML = '';
                    const img = window.Utils.createElement('img', { src: imageDataUrl, style: 'width: 100%; height: 100%; object-fit: cover;' });
                    imagePreview.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
        imagePreview.onclick = () => fileInput.click();

        const imageGroup = window.Utils.createElement('div', { className: 'form-group' },
            window.Utils.createElement('label', {}, 'Product Image *'),
            fileInput,
            imagePreview
        );

        // -- Supplier Offerings Section --
        const offeringsSection = window.Utils.createElement('div', { style: 'margin-top: 32px; border-top: 1px solid var(--border-color); padding-top: 24px;' },
            window.Utils.createElement('h3', { style: 'margin-bottom: 16px;' }, 'Supplier Offerings')
        );
        const offeringsContainer = window.Utils.createElement('div', { id: 'offerings-container', className: 'flex flex-col gap-16' });

        function createOfferingRow() {
            offeringCount++;
            const row = window.Utils.createElement('div', {
                className: 'offering-row',
                style: 'padding: 20px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--secondary-bg);'
            });

            const header = window.Utils.createElement('div', { className: 'flex justify-between items-center', style: 'margin-bottom: 12px;' },
                window.Utils.createElement('strong', {}, `Offering #${offeringCount}`),
                window.Utils.createElement('button', {
                    type: 'button',
                    style: 'color: #ef4444; font-size: 0.9rem; cursor: pointer; background: none; border: none;',
                    onclick: () => { row.remove(); }
                }, '✕ Remove')
            );

            const supplierSel = window.Utils.createElement('select', { className: 'search-input of-supplier', style: 'margin-bottom: 8px;' },
                window.Utils.createElement('option', { value: '' }, '-- Select Supplier --'),
                ...suppliers.map(s => window.Utils.createElement('option', { value: s.id }, s.name))
            );

            const priceInput = window.Utils.createElement('input', { type: 'number', className: 'search-input of-price', placeholder: 'Price in GH₵', style: 'margin-bottom: 8px;', min: '0', step: '0.01' });

            const conditionSel = window.Utils.createElement('select', { className: 'search-input of-condition', style: 'margin-bottom: 8px;' },
                window.Utils.createElement('option', { value: 'Brand New' }, 'Brand New'),
                window.Utils.createElement('option', { value: 'Refurbished - Grade A' }, 'Refurbished - Grade A'),
                window.Utils.createElement('option', { value: 'Used - Good' }, 'Used - Good'),
                window.Utils.createElement('option', { value: 'Brand New - Bulk' }, 'Brand New - Bulk')
            );

            const warrantyInput = window.Utils.createElement('input', { type: 'text', className: 'search-input of-warranty', placeholder: 'Warranty (e.g. 1 Year)', style: 'margin-bottom: 12px;' });

            // Specs
            const specsLabel = window.Utils.createElement('label', { style: 'font-weight: 500; display: block; margin-bottom: 8px;' }, 'Specifications');
            const specsContainer = window.Utils.createElement('div', { className: 'specs-container flex flex-col gap-8' });

            function addSpecRow() {
                const specRow = window.Utils.createElement('div', { className: 'spec-row flex gap-8', style: 'align-items: center;' },
                    window.Utils.createElement('input', { type: 'text', className: 'search-input spec-key', placeholder: 'e.g. RAM', style: 'flex: 1;' }),
                    window.Utils.createElement('input', { type: 'text', className: 'search-input spec-val', placeholder: 'e.g. 16GB', style: 'flex: 1;' }),
                    window.Utils.createElement('button', {
                        type: 'button',
                        style: 'color: #ef4444; cursor: pointer; background: none; border: none; font-size: 1.1rem;',
                        onclick: () => specRow.remove()
                    }, '✕')
                );
                specsContainer.appendChild(specRow);
            }

            addSpecRow(); // Start with one row

            const addSpecBtn = window.Utils.createElement('button', {
                type: 'button', className: 'btn-outline', style: 'margin-top: 8px; font-size: 0.85rem; padding: 6px 12px;',
                onclick: addSpecRow
            }, '+ Add Spec');

            row.appendChild(header);
            row.appendChild(supplierSel);
            row.appendChild(priceInput);
            row.appendChild(conditionSel);
            row.appendChild(warrantyInput);
            row.appendChild(specsLabel);
            row.appendChild(specsContainer);
            row.appendChild(addSpecBtn);

            return row;
        }

        // Add first offering row by default
        offeringsContainer.appendChild(createOfferingRow());

        const addOfferingBtn = window.Utils.createElement('button', {
            type: 'button', className: 'btn-outline', style: 'margin-top: 16px; width: 100%; padding: 12px;',
            onclick: () => offeringsContainer.appendChild(createOfferingRow())
        }, '+ Add Another Supplier Offering');

        offeringsSection.appendChild(offeringsContainer);
        offeringsSection.appendChild(addOfferingBtn);

        // -- Submit --
        const submitBtn = window.Utils.createElement('button', {
            type: 'submit', className: 'btn-primary',
            style: 'width: 100%; padding: 16px; font-size: 1.1rem; margin-top: 32px;'
        }, '🚀 Publish Product');

        // Assemble
        form.appendChild(nameGroup);
        form.appendChild(catGroup);
        form.appendChild(brandGroup);
        form.appendChild(descGroup);
        form.appendChild(imageGroup);
        form.appendChild(offeringsSection);
        form.appendChild(submitBtn);
        container.appendChild(form);

        return container;
    },

    AddSupplier: async () => {
        const container = window.Utils.createElement('div', { className: 'section container' },
            window.Utils.createElement('h1', { style: 'margin-bottom: 8px;' }, 'Add New Supplier'),
            window.Utils.createElement('p', { className: 'text-muted', style: 'margin-bottom: 32px;' }, 'Register a new supplier to make them available for product listings.')
        );

        const form = window.Utils.createElement('form', {
            style: 'max-width: 700px; background: #fff; padding: 32px; border-radius: 12px; border: 1px solid var(--border-color);',
            onsubmit: (e) => {
                e.preventDefault();

                const name = form.querySelector('#as-name').value.trim();
                const address = form.querySelector('#as-address').value.trim();
                const email = form.querySelector('#as-email').value.trim();
                const phone = form.querySelector('#as-phone').value.trim();
                const linkedin = form.querySelector('#as-linkedin').value.trim();
                const twitter = form.querySelector('#as-twitter').value.trim();
                const facebook = form.querySelector('#as-facebook').value.trim();
                const instagram = form.querySelector('#as-instagram').value.trim();

                if (!name || !address || !email || !phone) {
                    alert('Please fill in all required fields (Name, Address, Email, Phone).');
                    return;
                }

                const socials = {};
                if (linkedin) socials.linkedin = linkedin;
                if (twitter) socials.twitter = twitter;
                if (facebook) socials.facebook = facebook;
                if (instagram) socials.instagram = instagram;

                const supplierId = 'sup-user-' + Date.now();
                const newSupplier = {
                    id: supplierId,
                    name,
                    rating: 0,
                    verified: false,
                    address,
                    email,
                    phone,
                    socials,
                    reviews: []
                };

                const existing = JSON.parse(localStorage.getItem('sourcehub-user-suppliers') || '[]');
                existing.push(newSupplier);
                localStorage.setItem('sourcehub-user-suppliers', JSON.stringify(existing));

                window.location.hash = `#/supplier/${supplierId}`;
            }
        });

        // Helper to create form groups
        function field(id, label, type, placeholder, required) {
            return window.Utils.createElement('div', { className: 'form-group' },
                window.Utils.createElement('label', { htmlFor: id }, label + (required ? ' *' : '')),
                window.Utils.createElement('input', { type, id, className: 'search-input', placeholder, required: !!required })
            );
        }

        form.appendChild(field('as-name', 'Supplier Name', 'text', 'e.g. Accra Auto Supplies', true));
        form.appendChild(field('as-address', 'Address', 'text', 'e.g. 15 Ring Road, Accra, Ghana', true));
        form.appendChild(field('as-email', 'Email', 'email', 'e.g. info@supplier.com', true));
        form.appendChild(field('as-phone', 'Phone', 'tel', 'e.g. +233 24 000 0000', true));

        // Social links section
        const socialsSection = window.Utils.createElement('div', { style: 'margin-top: 24px; border-top: 1px solid var(--border-color); padding-top: 20px;' },
            window.Utils.createElement('h3', { style: 'margin-bottom: 16px;' }, 'Social Media Links'),
            window.Utils.createElement('p', { className: 'text-muted', style: 'margin-bottom: 16px; font-size: 0.9rem;' }, 'Optional — add any relevant social profiles.')
        );

        socialsSection.appendChild(field('as-linkedin', 'LinkedIn', 'url', 'https://linkedin.com/company/...', false));
        socialsSection.appendChild(field('as-twitter', 'Twitter / X', 'url', 'https://twitter.com/...', false));
        socialsSection.appendChild(field('as-facebook', 'Facebook', 'url', 'https://facebook.com/...', false));
        socialsSection.appendChild(field('as-instagram', 'Instagram', 'url', 'https://instagram.com/...', false));

        form.appendChild(socialsSection);

        form.appendChild(window.Utils.createElement('button', {
            type: 'submit', className: 'btn-primary',
            style: 'width: 100%; padding: 16px; font-size: 1.1rem; margin-top: 24px;'
        }, '✅ Register Supplier'));

        container.appendChild(form);
        return container;


    }
};
