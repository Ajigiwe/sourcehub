const fs = require('fs');
const file = 'js/data.js';
let content = fs.readFileSync(file, 'utf8');

let window = {};
eval(content);

let products = window.SOURCEHUB_DATA.products;

const explicitMap = {
    'iPhone 15 Pro': 'assets/products/iphone15pro.png',
    'iPad Pro 12.9"': 'assets/products/iPad-pro-12-9-3gen.png.webp',
    'Apple Watch Ultra 2': 'assets/products/images.jpg',
    'AirPods Pro (2nd Gen)': 'assets/products/Apple-AirPods-Pro-2nd-Gen-Wireless-Earbuds1.webp',
    'Mac Studio': 'assets/products/mac-studio-front.jpg',
    'Studio Display': 'assets/products/studio-display_specs__d7kv1hkz4ioi_og.png',
    'HomePod (2nd Gen)': 'assets/products/Apple-HomePod_2nd-Gen_featured-image-packshot-review.jpg',
    'Air Force 1 \'07': 'assets/products/nike_af1.png',
    'Pegasus 40': 'assets/products/images (1).jpg',
    'Dunk Low': 'assets/products/primary_800x1200 (3).jpg',
    'Galaxy S24 Ultra': 'assets/products/Samsung-Galaxy-S24-Ultra-5G-SM-S928B-DS-256GB-12GB-RAM-Factory-Unlocked-GSM-Titanium-Violet_27c8a138-e673-4372-831a-744cb9511b5f.26c52035bd3a5280da10538de73f88ae.avif',
    '65" OLED S95C TV': 'assets/products/samsung_tv.png',
    'PlayStation 5 Console': 'assets/products/ps5.png',
    'WH-1000XM5 Headphones': 'assets/products/sony_headphones.png',
    'Surface Pro 9': 'assets/products/surface_pro.png',
    'Dyson V15 Detect': 'assets/products/dyson_v15.png',
    'MX Master 3S': 'assets/products/mx_master.png',
    'MacBook Pro 14"': 'assets/products/1709805259_IMG_1733444.jpg'
};

let finalProducts = [];
for (const product of products) {
    if (explicitMap[product.name]) {
        product.images[0] = explicitMap[product.name];
        finalProducts.push(product);
    }
}

const startRegex = /products: \[\s*\{/;
const endRegex = /]\s*};\s*window\.DataService/m;
const matchStart = content.match(startRegex);
const matchEnd = content.match(endRegex);

if (matchStart && matchEnd) {
    const startIdx = matchStart.index;
    const endIdx = matchEnd.index;
    const beforeStr = content.substring(0, startIdx);
    const afterStr = content.substring(endIdx);
    const newProductsStr = `products: ` + JSON.stringify(finalProducts, null, 8);
    fs.writeFileSync(file, beforeStr + newProductsStr + afterStr);
    console.log(`Explicit mapping complete. Catalog size is now ${finalProducts.length}. Mismatched products removed.`);
}
