const fs = require('fs');
const file = 'js/data.js';

const newData = {
    categories: [
        { id: "cat-vehicles", name: "Vehicles", slug: "vehicles", icon: "🚗", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800", description: "Commercial & Personal Vehicles" },
        { id: "cat-laptops", name: "Laptops", slug: "laptops", icon: "💻", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800", description: "Professional Computing Devices" },
        { id: "cat-shoes", name: "Shoes", slug: "shoes", icon: "👟", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800", description: "Footwear & Athletic Gear" },
        { id: "cat-phones", name: "Phones", slug: "phones", icon: "📱", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800", description: "Smartphones & Mobile Devices" }
    ],
    suppliers: [
        { id: "sup-1", name: "Global Trading Hub", rating: 4.8, verified: true },
        { id: "sup-2", name: "Prime Sourcing Co.", rating: 4.5, verified: true },
        { id: "sup-3", name: "Direct Wholesale Ltd", rating: 4.2, verified: false }
    ],
    brands: [
        { id: "brand-toyota", name: "Toyota", slug: "toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg", categoryIds: ["cat-vehicles"] },
        { id: "brand-mercedes", name: "Mercedes-Benz", slug: "mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg", categoryIds: ["cat-vehicles"] },
        { id: "brand-dell", name: "Dell", slug: "dell", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png", categoryIds: ["cat-laptops"] },
        { id: "brand-apple", name: "Apple", slug: "apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", categoryIds: ["cat-phones", "cat-laptops"] },
        { id: "brand-nike", name: "Nike", slug: "nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", categoryIds: ["cat-shoes"] },
        { id: "brand-samsung", name: "Samsung", slug: "samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", categoryIds: ["cat-phones"] }
    ],
    products: []
};

// Generate products with multiple offerings
function createProduct(id, name, brandId, categoryId, image, specsBase, priceBase) {
    return {
        id, name, brandId, categoryId,
        images: [image],
        description: `Premium ${name} sourcing options.`,
        offerings: [
            {
                supplierId: "sup-1",
                price: priceBase,
                condition: "Brand New",
                warranty: specsBase.warranty || "1 Year"
            },
            {
                supplierId: "sup-2",
                price: Math.round(priceBase * 0.95),
                condition: "Brand New - Bulk Packaging",
                warranty: specsBase.warranty || "1 Year"
            },
            {
                supplierId: "sup-3",
                price: Math.round(priceBase * 0.8),
                condition: "Refurbished - Grade A",
                warranty: "90 Days"
            }
        ]
    };
}

newData.products.push(
    createProduct("p-1", "Toyota Hilux 2024", "brand-toyota", "cat-vehicles", "https://images.unsplash.com/photo-1594502184325-3f1947a1262d?auto=format&fit=crop&q=80&w=800", { warranty: "3 Years" }, 450000),
    createProduct("p-2", "Mercedes-Benz C-Class", "brand-mercedes", "cat-vehicles", "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800", { warranty: "2 Years" }, 650000),
    createProduct("p-3", "Dell Latitude 7420", "brand-dell", "cat-laptops", "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800", { warranty: "1 Year" }, 15000),
    createProduct("p-4", "MacBook Pro M3", "brand-apple", "cat-laptops", "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800", { warranty: "1 Year" }, 25000),
    createProduct("p-5", "Nike Air Max 90", "brand-nike", "cat-shoes", "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800", { warranty: "N/A" }, 1200),
    createProduct("p-6", "iPhone 15 Pro Max", "brand-apple", "cat-phones", "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800", { warranty: "1 Year" }, 18000),
    createProduct("p-7", "Samsung Galaxy S24 Ultra", "brand-samsung", "cat-phones", "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800", { warranty: "1 Year" }, 17500)
);

const dataJsContent = `/**
 * Data Service for SourceHub (Multi-Tier Navigation)
 */

window.SOURCEHUB_DATA = ${JSON.stringify(newData, null, 4)};

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
`;

fs.writeFileSync(file, dataJsContent);
console.log("Rewrote data.js with new multi-tier hierarchy.");
