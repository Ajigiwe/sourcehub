/**
 * Data Service for SourceHub
 */

window.SOURCEHUB_DATA = {
    "categories": [
        {
            "id": "cat-vehicles",
            "name": "Vehicles",
            "slug": "vehicles",
            "icon": "🚗",
            "image": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
            "description": "Commercial & Personal Vehicles"
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
            "id": "brand-toyota",
            "name": "Toyota",
            "slug": "toyota",
            "logo": "https://www.vectorlogo.zone/logos/toyota/toyota-ar21.svg",
            "categoryIds": [
                "cat-vehicles"
            ]
        },
        {
            "id": "brand-mercedes",
            "name": "Mercedes-Benz",
            "slug": "mercedes",
            "logo": "https://www.vectorlogo.zone/logos/mercedesbenz/mercedesbenz-ar21.svg",
            "categoryIds": [
                "cat-vehicles"
            ]
        },
        {
            "id": "brand-apple",
            "name": "Apple",
            "slug": "apple",
            "logo": "https://www.vectorlogo.zone/logos/apple/apple-ar21.svg",
            "categoryIds": [
                "cat-phones"
            ]
        },
        {
            "id": "brand-samsung",
            "name": "Samsung",
            "slug": "samsung",
            "logo": "https://www.vectorlogo.zone/logos/samsung/samsung-ar21.svg",
            "categoryIds": [
                "cat-phones"
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
                "assets/products/toyota_hilux_2024.png"
            ],
            "description": "Premium Toyota Hilux 2024 sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 350000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 332500,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 280000,
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
            "id": "p-2",
            "name": "Toyota Land Cruiser 300",
            "brandId": "brand-toyota",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/toyota_land_cruiser.png"
            ],
            "description": "Premium Toyota Land Cruiser 300 sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 650000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 617500,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 520000,
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
            "id": "p-3",
            "name": "Toyota Camry 2024",
            "brandId": "brand-toyota",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/toyota_camry.png"
            ],
            "description": "Premium Toyota Camry 2024 sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 250000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 237500,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 200000,
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
            "id": "p-4",
            "name": "Toyota Corolla 2024",
            "brandId": "brand-toyota",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/toyota_corolla.png"
            ],
            "description": "Premium Toyota Corolla 2024 sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 180000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 171000,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 144000,
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
            "id": "p-5",
            "name": "Toyota RAV4 2024",
            "brandId": "brand-toyota",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/toyota_rav4.png"
            ],
            "description": "Premium Toyota RAV4 2024 sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 280000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 266000,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 224000,
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
            "id": "p-6",
            "name": "Mercedes-Benz C-Class",
            "brandId": "brand-mercedes",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/Mercedes-Benz C-Class.jpg"
            ],
            "description": "Premium Mercedes-Benz C-Class sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 450000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 427500,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 360000,
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
            "id": "p-7",
            "name": "Mercedes-Benz G-Class",
            "brandId": "brand-mercedes",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/mercedes_g_class.png"
            ],
            "description": "Premium Mercedes-Benz G-Class sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 1200000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 1140000,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 960000,
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
            "id": "p-8",
            "name": "Mercedes-Benz S-Class",
            "brandId": "brand-mercedes",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/mercedes_s_class.png"
            ],
            "description": "Premium Mercedes-Benz S-Class sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 950000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 902500,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 760000,
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
            "id": "p-9",
            "name": "Mercedes-Benz E-Class",
            "brandId": "brand-mercedes",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/mercedes_e_class.png"
            ],
            "description": "Premium Mercedes-Benz E-Class sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 650000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 617500,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 520000,
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
            "id": "p-10",
            "name": "Mercedes-Benz GLE",
            "brandId": "brand-mercedes",
            "categoryId": "cat-vehicles",
            "images": [
                "assets/products/mercedes_gle.png"
            ],
            "description": "Premium Mercedes-Benz GLE sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 750000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 712500,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 600000,
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
            "id": "p-12",
            "name": "iPhone 16 Pro",
            "brandId": "brand-apple",
            "categoryId": "cat-phones",
            "images": [
                "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800"
            ],
            "description": "Premium iPhone 16 Pro sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 15000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 14250,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 12000,
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
            "id": "p-13",
            "name": "iPhone 15 Pro Max",
            "brandId": "brand-apple",
            "categoryId": "cat-phones",
            "images": [
                "assets/products/iphone_15_pro_max.png"
            ],
            "description": "Premium iPhone 15 Pro Max sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 13000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 12350,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 10400,
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
            "id": "p-14",
            "name": "iPhone 14 Pro",
            "brandId": "brand-apple",
            "categoryId": "cat-phones",
            "images": [
                "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=800"
            ],
            "description": "Premium iPhone 14 Pro sourcing options with direct WhatsApp support.",
            "offerings": [
                {
                    "supplierId": "sup-1",
                    "price": 10000,
                    "condition": "Brand New",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "Standard",
                        "Package": "Retail"
                    }
                },
                {
                    "supplierId": "sup-2",
                    "price": 9500,
                    "condition": "Brand New - Bulk",
                    "warranty": "1 Year",
                    "specs": {
                        "Type": "OEM",
                        "Package": "Bulk"
                    }
                },
                {
                    "supplierId": "sup-3",
                    "price": 8000,
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
