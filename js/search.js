/**
 * Search logic for SourceHub (Non-ESM Version)
 */

window.Search = {
    async query(text) {
        if (!text) return [];

        const [products, brands, categories] = await Promise.all([
            window.DataService.getProducts(),
            window.DataService.getBrands(),
            window.DataService.getCategories()
        ]);

        const q = text.toLowerCase();

        const results = [
            ...products.filter(p => p.name.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q))),
            ...brands.filter(b => b.name.toLowerCase().includes(q)),
            ...categories.filter(c => c.name.toLowerCase().includes(q))
        ];

        return results;
    }
};
