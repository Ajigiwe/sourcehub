/**
 * Data Service for SourceHub (Multi-Tier Navigation)
 */

window.SOURCEHUB_DATA = {
    "categories": [
        {
            "id": "cat-vehicles",
            "name": "Vehicles",
            "slug": "vehicles",
            "icon": "🚗",
            "image": "assets/categories/vehicles.png",
            "description": "Commercial & Personal Vehicles"
        },
        {
            "id": "cat-laptops",
            "name": "Laptops",
            "slug": "laptops",
            "icon": "💻",
            "image": "assets/categories/laptops.png",
            "description": "Professional Computing Devices"
        },
        {
            "id": "cat-shoes",
            "name": "Shoes",
            "slug": "shoes",
            "icon": "👟",
            "image": "assets/categories/shoes.png",
            "description": "Footwear & Athletic Gear"
        },
        {
            "id": "cat-phones",
            "name": "Phones",
            "slug": "phones",
            "icon": "📱",
            "image": "assets/categories/phones.png",
            "description": "Smartphones & Mobile Devices"
        }
    ],
    "suppliers": [
        {
            "id": "sup-1",
            "name": "Global Trading Hub",
            "rating": 4.8,
            "verified": true,
            "address": "12 High Street, Accra, Ghana",
            "email": "contact@globaltrading.com",
            "phone": "+233 24 123 4567",
            "socials": {
                "linkedin": "https://linkedin.com/company/globaltrading",
                "twitter": "https://twitter.com/globaltrading"
            },
            "reviews": [
                { "user": "Isaac K.", "rating": 5, "comment": "Very reliable supplier for vehicles. Excellent service!", "date": "2024-02-15" },
                { "user": "Sarah M.", "rating": 4.5, "comment": "Good prices and fast delivery on laptops.", "date": "2024-03-01" }
            ]
        },
        {
            "id": "sup-2",
            "name": "Prime Sourcing Co.",
            "rating": 4.5,
            "verified": true,
            "address": "45 Industrial Area, Kumasi, Ghana",
            "email": "sales@primesourcing.gh",
            "phone": "+233 20 987 6543",
            "socials": {
                "linkedin": "https://linkedin.com/company/primesourcing",
                "facebook": "https://facebook.com/primesourcinggh"
            },
            "reviews": [
                { "user": "Kwame O.", "rating": 4, "comment": "Professional team. Products are exactly as described.", "date": "2024-01-20" }
            ]
        },
        {
            "id": "sup-3",
            "name": "Direct Wholesale Ltd",
            "rating": 4.2,
            "verified": false,
            "address": "88 Spintex Road, Accra, Ghana",
            "email": "info@directwholesale.com",
            "phone": "+233 55 555 1234",
            "socials": {
                "instagram": "https://instagram.com/directwholesale"
            },
            "reviews": [
                { "user": "John D.", "rating": 4.2, "comment": "Good variety of shoes at wholesale prices.", "date": "2023-12-10" }
            ]
        }
    ],
    "brands": [
        {
            "id": "brand-toyota",
            "name": "Toyota",
            "slug": "toyota",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
            "categoryIds": [
                "cat-vehicles"
            ]
        },
        {
            "id": "brand-mercedes",
            "name": "Mercedes-Benz",
            "slug": "mercedes",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
            "categoryIds": [
                "cat-vehicles"
            ]
        },
        {
            "id": "brand-dell",
            "name": "Dell",
            "slug": "dell",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png",
            "categoryIds": [
                "cat-laptops"
            ]
        },
        {
            "id": "brand-apple",
            "name": "Apple",
            "slug": "apple",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            "categoryIds": [
                "cat-phones",
                "cat-laptops"
            ]
        },
        {
            "id": "brand-nike",
            "name": "Nike",
            "slug": "nike",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
            "categoryIds": [
                "cat-shoes"
            ]
        },
        {
            "id": "brand-samsung",
            "name": "Samsung",
            "slug": "samsung",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
            "categoryIds": [
                "cat-phones"
            ]
        },
        {
            "id": "brand-lenovo",
            "name": "Lenovo",
            "slug": "lenovo",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg",
            "categoryIds": [
                "cat-laptops"
            ]
        },
        {
            "id": "brand-hp",
            "name": "HP",
            "slug": "hp",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
            "categoryIds": [
                "cat-laptops"
            ]
        },
        {
            "id": "brand-asus",
            "name": "Asus",
            "slug": "asus",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
            "categoryIds": [
                "cat-laptops"
            ]
        }
    ],
    "products": [
        {
            "id": "p-1",
            "name": "Toyota Hilux 2024",
            "brandId": "brand-toyota",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/Toyota Hilux 2024.webp"
            ],
            "description": "Premium Toyota Hilux 2024 sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 450000,
                    "condition": "Brand New",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Base Model",
                        "Engine": "Standard 2.4L",
                        "Interior": "Fabric"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 427500,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Premium",
                        "Engine": "Upgraded 2.8L",
                        "Interior": "Leather"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 360000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Trim": "Luxury Edition",
                        "Engine": "V6 3.5L",
                        "Interior": "Premium Leather"
                    }
                }
            ]
        },
        {
            "id": "p-2",
            "name": "Mercedes-Benz C-Class",
            "brandId": "brand-mercedes",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/Mercedes-Benz C-Class.jpg"
            ],
            "description": "Premium Mercedes-Benz C-Class sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 650000,
                    "condition": "Brand New",
                    "warranty": "2 Years",
                    "specs": {
                        "Trim": "Base Model",
                        "Engine": "Standard 2.4L",
                        "Interior": "Fabric"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 617500,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "2 Years",
                    "specs": {
                        "Trim": "Premium",
                        "Engine": "Upgraded 2.8L",
                        "Interior": "Leather"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 520000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Trim": "Luxury Edition",
                        "Engine": "V6 3.5L",
                        "Interior": "Premium Leather"
                    }
                }
            ]
        },
        {
            "id": "p-3",
            "name": "Dell Latitude 7420",
            "brandId": "brand-dell",
            "categoryId": "cat-laptops",
            "images": [
                "assets/products/Dell Latitude 7420.jpg"
            ],
            "description": "Premium Dell Latitude 7420 sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 15000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Processor": "Base CPU",
                        "RAM": "8GB",
                        "Storage": "256GB SSD"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 14250,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "1 Year",
                    "specs": {
                        "Processor": "Mid-tier CPU",
                        "RAM": "16GB",
                        "Storage": "512GB SSD"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 12000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Processor": "High-end CPU",
                        "RAM": "32GB",
                        "Storage": "1TB SSD"
                    }
                }
            ]
        },
        {
            "id": "p-4",
            "name": "MacBook Pro M3",
            "brandId": "brand-apple",
            "categoryId": "cat-laptops",
            "images": [
                "assets/products/mac-studio-front.jpg"
            ],
            "description": "Premium MacBook Pro M3 sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 25000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Processor": "Base CPU",
                        "RAM": "8GB",
                        "Storage": "256GB SSD"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 23750,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "1 Year",
                    "specs": {
                        "Processor": "Mid-tier CPU",
                        "RAM": "16GB",
                        "Storage": "512GB SSD"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 20000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Processor": "High-end CPU",
                        "RAM": "32GB",
                        "Storage": "1TB SSD"
                    }
                }
            ]
        },
        {
            "id": "p-5",
            "name": "Nike Air Max 90",
            "brandId": "brand-nike",
            "categoryId": "cat-shoes",
            "images": [
                "assets/products/nike_af1.png"
            ],
            "description": "Premium Nike Air Max 90 sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 1200,
                    "condition": "Brand New",
                    "warranty": "N/A",
                    "specs": {
                        "Material": "Standard Synth",
                        "Sizes": "US 7-10",
                        "Laces": "Standard"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 1140,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "N/A",
                    "specs": {
                        "Material": "Premium Leather",
                        "Sizes": "US 7-12",
                        "Laces": "Extra Pair"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 960,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Material": "Primeknit/Mesh",
                        "Sizes": "Custom Fit",
                        "Laces": "Reflective"
                    }
                }
            ]
        },
        {
            "id": "p-6",
            "name": "iPhone 15 Pro Max",
            "brandId": "brand-apple",
            "categoryId": "cat-phones",
            "images": [
                "assets/products/iphone15pro.png"
            ],
            "description": "Premium iPhone 15 Pro Max sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 18000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Storage": "128GB",
                        "RAM": "8GB",
                        "Color": "Standard"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 17100,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "1 Year",
                    "specs": {
                        "Storage": "256GB",
                        "RAM": "12GB",
                        "Color": "Premium"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 14400,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Storage": "512GB",
                        "RAM": "12GB",
                        "Color": "Exclusive"
                    }
                }
            ]
        },
        {
            "id": "p-7",
            "name": "Samsung Galaxy S24 Ultra",
            "brandId": "brand-samsung",
            "categoryId": "cat-phones",
            "images": [
                "assets/products/Samsung-Galaxy-S24-Ultra-5G-SM-S928B-DS-256GB-12GB-RAM-Factory-Unlocked-GSM-Titanium-Violet_27c8a138-e673-4372-831a-744cb9511b5f.26c52035bd3a5280da10538de73f88ae.avif"
            ],
            "description": "Premium Samsung Galaxy S24 Ultra sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 17500,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Storage": "128GB",
                        "RAM": "8GB",
                        "Color": "Standard"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 16625,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "1 Year",
                    "specs": {
                        "Storage": "256GB",
                        "RAM": "12GB",
                        "Color": "Premium"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 14000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Storage": "512GB",
                        "RAM": "12GB",
                        "Color": "Exclusive"
                    }
                }
            ]
        },
        {
            "id": "p-8",
            "name": "Toyota Land Cruiser 300",
            "brandId": "brand-toyota",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/toyota_land_cruiser.png"
            ],
            "description": "Premium Toyota Land Cruiser 300 sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 850000,
                    "condition": "Brand New",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Base Model",
                        "Engine": "Standard 2.4L",
                        "Interior": "Fabric"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 807500,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Premium",
                        "Engine": "Upgraded 2.8L",
                        "Interior": "Leather"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 680000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "1 Year",
                    "specs": {
                        "Trim": "Luxury Edition",
                        "Engine": "V6 3.5L",
                        "Interior": "Premium Leather"
                    }
                }
            ]
        },
        {
            "id": "p-9",
            "name": "Toyota Camry 2024",
            "brandId": "brand-toyota",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/toyota_camry.png"
            ],
            "description": "Premium Toyota Camry 2024 sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 350000,
                    "condition": "Brand New",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Base Model",
                        "Engine": "Standard 2.4L",
                        "Interior": "Fabric"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 332500,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Premium",
                        "Engine": "Upgraded 2.8L",
                        "Interior": "Leather"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 280000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "1 Year",
                    "specs": {
                        "Trim": "Luxury Edition",
                        "Engine": "V6 3.5L",
                        "Interior": "Premium Leather"
                    }
                }
            ]
        },
        {
            "id": "p-10",
            "name": "Mercedes-Benz G-Class",
            "brandId": "brand-mercedes",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/mercedes_g_class.png"
            ],
            "description": "Premium Mercedes-Benz G-Class sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 1500000,
                    "condition": "Brand New",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Base Model",
                        "Engine": "Standard 2.4L",
                        "Interior": "Fabric"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 1425000,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Premium",
                        "Engine": "Upgraded 2.8L",
                        "Interior": "Leather"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 1200000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "1 Year",
                    "specs": {
                        "Trim": "Luxury Edition",
                        "Engine": "V6 3.5L",
                        "Interior": "Premium Leather"
                    }
                }
            ]
        },
        {
            "id": "p-11",
            "name": "Mercedes-Benz S-Class",
            "brandId": "brand-mercedes",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/mercedes_s_class.png"
            ],
            "description": "Premium Mercedes-Benz S-Class sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 1200000,
                    "condition": "Brand New",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Base Model",
                        "Engine": "Standard 2.4L",
                        "Interior": "Fabric"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 1140000,
                    "condition": "Brand New - Bulk Packaging",
                    "warranty": "3 Years",
                    "specs": {
                        "Trim": "Premium",
                        "Engine": "Upgraded 2.8L",
                        "Interior": "Leather"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 960000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "1 Year",
                    "specs": {
                        "Trim": "Luxury Edition",
                        "Engine": "V6 3.5L",
                        "Interior": "Premium Leather"
                    }
                }
            ]
        },
        {
            "id": "p-12",
            "name": "Lenovo ThinkPad X1 Carbon",
            "brandId": "brand-lenovo",
            "categoryId": "cat-laptops",
            "images": [
                "assets/products/Lenovo ThinkPad X1 Carbon.avif"
            ],
            "description": "Premium Lenovo ThinkPad X1 Carbon sourcing options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 18000,
                    "condition": "Brand New",
                    "warranty": "3 Years",
                    "specs": {
                        "Processor": "Intel Core i5",
                        "RAM": "8GB LPDDR5",
                        "Storage": "256GB PCIe SSD"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 20000,
                    "condition": "Brand New - Bulk",
                    "warranty": "3 Years",
                    "specs": {
                        "Processor": "Intel Core i7",
                        "RAM": "16GB LPDDR5",
                        "Storage": "512GB PCIe SSD"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 24000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "1 Year",
                    "specs": {
                        "Processor": "Intel Core i7",
                        "RAM": "32GB LPDDR5",
                        "Storage": "1TB PCIe SSD"
                    }
                }
            ]
        },
        {
            "id": "p-13",
            "name": "HP Spectre x360",
            "brandId": "brand-hp",
            "categoryId": "cat-laptops",
            "images": [
                "assets/products/HP Spectre x360.jpg"
            ],
            "description": "Premium HP Spectre x360 UX3405 options.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 16000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Processor": "Core Ultra 5 125H",
                        "RAM": "16GB",
                        "Storage": "512GB Gen4 SSD"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 18500,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Processor": "Core Ultra 7 155H",
                        "RAM": "16GB",
                        "Storage": "1TB Gen4 SSD"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 22000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Processor": "Core Ultra 7 155H",
                        "RAM": "32GB",
                        "Storage": "2TB Gen4 SSD"
                    }
                }
            ]
        },
        {
            "id": "p-14",
            "name": "Asus ROG Zephyrus G14",
            "brandId": "brand-asus",
            "categoryId": "cat-laptops",
            "images": [
                "assets/products/Asus ROG Zephyrus G14.webp"
            ],
            "description": "Premium Asus ROG Zephyrus G14 Gaming Laptop.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 20000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Processor": "Ryzen 7 8845HS",
                        "GPU": "RTX 4050 6GB",
                        "Storage": "512GB SSD"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 23000,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Processor": "Ryzen 9 8945HS",
                        "GPU": "RTX 4060 8GB",
                        "Storage": "1TB SSD"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 28000,
                    "condition": "Refurbished - Grade A",
                    "warranty": "6 Months",
                    "specs": {
                        "Processor": "Ryzen 9 8945HS",
                        "GPU": "RTX 4070 8GB",
                        "Storage": "2TB SSD"
                    }
                }
            ]
        }
    ]
};

window.DataService = {
    getProducts() {
        const brands = window.SOURCEHUB_DATA.brands;
        const products = window.SOURCEHUB_DATA.products.map(p => {
            const b = brands.find(brand => brand.id === p.brandId);
            return { ...p, brandName: b ? b.name : p.brandId };
        });
        return Promise.resolve(products);
    },

    getBrands() {
        return Promise.resolve(window.SOURCEHUB_DATA.brands);
    },

    getCategories() {
        return Promise.resolve(window.SOURCEHUB_DATA.categories);
    },

    getSuppliers() {
        return Promise.resolve(window.SOURCEHUB_DATA.suppliers);
    },

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find(p => p.id === id);
    },

    async getBrandBySlug(slug) {
        const brands = await this.getBrands();
        return brands.find(b => b.slug === slug);
    },

    async getCategoryBySlug(slug) {
        const categories = await this.getCategories();
        return categories.find(c => c.slug === slug);
    },

    async getBrandsByCategory(categoryId) {
        const brands = await this.getBrands();
        return brands.filter(b => b.categoryIds.includes(categoryId));
    },

    async getProductsByBrand(brandId) {
        const products = await this.getProducts();
        return products.filter(p => p.brandId === brandId);
    },

    async getSupplierById(id) {
        const suppliers = await this.getSuppliers();
        return suppliers.find(s => s.id === id);
    }
};
