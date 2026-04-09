import fs from 'fs';
import path from 'path';

function removeGBPOffer(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            removeGBPOffer(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.mdx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Remove standalone span elements holding the offer
            content = content.replace(/<span[^>]*>\s*\([Pp]lus, we['’]ll optimize your Google My Business.*?for free\)\s*<\/span>/gi, '');
            
            // Remove the inline text versions
            content = content.replace(/\s*\([Pp]lus, we['’]ll optimize your Google My Business.*?for free\)/gi, '');
            
            // Also remove the "to get more views" variant if inside a span
            content = content.replace(/<span[^>]*>.*?[Ww]e['’]ll optimize your Google My Business.*?to get more views\.?\s*<\/span>/gi, '');
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

console.log("Removing GBP offer texts globally...");
removeGBPOffer(path.join(process.cwd(), 'app'));
removeGBPOffer(path.join(process.cwd(), 'components'));
removeGBPOffer(path.join(process.cwd(), 'content'));
removeGBPOffer(path.join(process.cwd(), 'lib'));
console.log("Cleanup complete!");
