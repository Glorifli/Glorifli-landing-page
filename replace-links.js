const fs = require('fs');
const path = require('path');

const replacements = [
    { from: /\/services\/autonomous-revenue-engine(?!-for-)/g, to: '/services/autonomous-revenue-engine-for-service-businesses' },
    { from: /\/services\/custom-website(?!-for-)/g, to: '/services/custom-website-for-service-businesses' },
    { from: /\/services\/seo-aeo-optimization(?!-for-)/g, to: '/services/seo-aeo-optimization-for-service-businesses' },
];

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.next')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.mdx') || file.endsWith('.md') || file.endsWith('.xml')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(process.cwd());
let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    replacements.forEach(r => {
        if (r.from.test(content)) {
            content = content.replace(r.from, r.to);
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
        console.log(`Updated: ${file}`);
    }
});

console.log(`\nSuccessfully updated ${updatedCount} files.`);
