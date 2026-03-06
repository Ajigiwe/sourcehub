const fs = require('fs');
const file = 'js/data.js';
let content = fs.readFileSync(file, 'utf8');

const mapping = {
    'AirPods Pro (2nd Gen)': 'assets/products/Apple-AirPods-Pro-2nd-Gen-Wireless-Earbuds1.webp',
    'HomePod (2nd Gen)': 'assets/products/Apple-HomePod_2nd-Gen_featured-image-packshot-review.jpg',
    'Galaxy S24 Ultra': 'assets/products/Samsung-Galaxy-S24-Ultra-5G-SM-S928B-DS-256GB-12GB-RAM-Factory-Unlocked-GSM-Titanium-Violet_27c8a138-e673-4372-831a-744cb9511b5f.26c52035bd3a5280da10538de73f88ae.avif',
    'iPad Pro 12.9"': 'assets/products/iPad-pro-12-9-3gen.png.webp',
    'Mac Studio': 'assets/products/mac-studio-front.jpg',
    'Studio Display': 'assets/products/studio-display_specs__d7kv1hkz4ioi_og.png',
};

// Evaluate the window Object
let window = {};
let document = {};
eval(content);

let products = window.SOURCEHUB_DATA.products;

// Apply mapping
let modified = false;
for (const product of products) {
    if (mapping[product.name]) {
        product.images[0] = mapping[product.name];
        modified = true;
    } else {
        // Look for ambiguous images manually later
    }
}

if (modified) {
    const startRegex = /products: \[\s*\{/;
    const endRegex = /]\s*};\s*window\.DataService/m;

    const matchStart = content.match(startRegex);
    const matchEnd = content.match(endRegex);

    if (matchStart && matchEnd) {
        const startIdx = matchStart.index;
        const endIdx = matchEnd.index;

        const beforeStr = content.substring(0, startIdx);
        const afterStr = content.substring(endIdx);

        const newProductsStr = `products: ` + JSON.stringify(products, null, 8);

        fs.writeFileSync(file, beforeStr + newProductsStr + afterStr);
        console.log("Updated data.js with new explicit image mappings.");
    }
}

// Log unmapped images for inspection
const allImages = fs.readdirSync('assets/products');
const usedImages = products.map(p => p.images[0].split('/').pop());
const unusedImages = allImages.filter(img => !usedImages.includes(img) && !img.endsWith('.png')); // Exclude the ones we generated earlier
console.log('Unused images: ', unusedImages);

