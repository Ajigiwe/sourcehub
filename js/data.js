/**
 * Data Service for SourceHub
 */

window.SOURCEHUB_DATA = {
    "categories": [
        {
            "id": "cat-laptops",
            "name": "Laptops",
            "slug": "laptops",
            "icon": "💻",
            "image": "assets/categories/laptops.png",
            "description": "Professional Computing Devices"
        },
        {
            "id": "cat-phones",
            "name": "Phones",
            "slug": "phones",
            "icon": "📱",
            "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
            "description": "Smartphones & Mobile Devices"
        }
    ],
    "suppliers": [
        {
            "id": "sup-1",
            "name": "Global Trading Hub",
            "rating": 4.8,
            "verified": true,
            "whatsapp": "https://wa.me/233500000001"
        },
        {
            "id": "sup-2",
            "name": "Prime Sourcing Co.",
            "rating": 4.5,
            "verified": true,
            "whatsapp": "https://wa.me/233500000002"
        },
        {
            "id": "sup-3",
            "name": "Direct Wholesale Ltd",
            "rating": 4.2,
            "verified": false,
            "whatsapp": "https://wa.me/233500000003"
        },
        {
            "id": "sup-4",
            "name": "TechDirect Global",
            "rating": 4.9,
            "verified": true,
            "whatsapp": "https://wa.me/233500000004"
        },
        {
            "id": "sup-5",
            "name": "Elite Auto Sourcing",
            "rating": 4.7,
            "verified": true,
            "whatsapp": "https://wa.me/233500000005"
        }
    ],
    "brands": [
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
        },
        {
            "id": "p-11",
            "name": "iPhone 17 Pro Max (Upcoming)",
            "brandId": "brand-apple",
            "categoryId": "cat-phones",
            "images": [
                "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800"
            ],
            "description": "Premium iPhone 17 Pro Max (Upcoming) sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 18000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 17100,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 14400,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Type": "Refurbished",
                        "Package": "White Box"
                    }
                }
            ]
        },
        {
            "id": "p-15",
            "name": "iPhone 13 Pro",
            "brandId": "brand-apple",
            "categoryId": "cat-phones",
            "images": [
                "https://images.unsplash.com/photo-1634493907317-a46b53b81882?auto=format&fit=crop&q=80&w=800"
            ],
            "description": "Premium iPhone 13 Pro sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 8500,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 8075,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 6800,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Type": "Refurbished",
                        "Package": "White Box"
                    }
                }
            ]
        },
        {
            "id": "p-16",
            "name": "iPhone 12 Pro",
            "brandId": "brand-apple",
            "categoryId": "cat-phones",
            "images": [
                "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?auto=format&fit=crop&q=80&w=800"
            ],
            "description": "Premium iPhone 12 Pro sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 6500,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 6175,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 5200,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Type": "Refurbished",
                        "Package": "White Box"
                    }
                }
            ]
        },
        {
            "id": "p-17",
            "name": "Samsung Galaxy S24 Ultra",
            "brandId": "brand-samsung",
            "categoryId": "cat-phones",
            "images": [
                "assets/products/samsung_s24_ultra.png"
            ],
            "description": "Premium Samsung Galaxy S24 Ultra sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 14000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 13300,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 11200,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Type": "Refurbished",
                        "Package": "White Box"
                    }
                }
            ]
        },
        {
            "id": "p-18",
            "name": "Samsung Galaxy Z Fold 5",
            "brandId": "brand-samsung",
            "categoryId": "cat-phones",
            "images": [
                "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800"
            ],
            "description": "Premium Samsung Galaxy Z Fold 5 sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 16000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 15200,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 12800,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Type": "Refurbished",
                        "Package": "White Box"
                    }
                }
            ]
        },
        {
            "id": "p-19",
            "name": "Samsung Galaxy S23 FE",
            "brandId": "brand-samsung",
            "categoryId": "cat-phones",
            "images": [
                "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
            ],
            "description": "Premium Samsung Galaxy S23 FE sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 6500,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 6175,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 5200,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Type": "Refurbished",
                        "Package": "White Box"
                    }
                }
            ]
        },
        {
            "id": "p-20",
            "name": "Samsung Galaxy A54",
            "brandId": "brand-samsung",
            "categoryId": "cat-phones",
            "images": [
                "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=800"
            ],
            "description": "Premium Samsung Galaxy A54 sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 4500,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 4275,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 3600,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Type": "Refurbished",
                        "Package": "White Box"
                    }
                }
            ]
        },
        {
            "id": "p-21",
            "name": "Samsung Galaxy Tab S9",
            "brandId": "brand-samsung",
            "categoryId": "cat-phones",
            "images": [
                "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=800"
            ],
            "description": "Premium Samsung Galaxy Tab S9 sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 9000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 8550,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 7200,
                    "condition": "Refurbished - Grade A",
                    "warranty": "90 Days",
                    "specs": {
                        "Type": "Refurbished",
                        "Package": "White Box"
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
    }
};
