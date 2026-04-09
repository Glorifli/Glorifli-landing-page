import fs from 'fs';
import path from 'path';

function findBadLinks(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findBadLinks(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            // Check if (Plus, we'll... is inside an <a> or <Link> element
            // We can look for >.*(plus.*?free).*?<\/a> or <\/Link>
            if (content.match(/<a[^>]*>.*?\([pP]lus, we['’]ll optimize.*?for free\).*?<\/a>/si)) {
                 console.log(`Found bad <a> tag in: ${fullPath}`);
            }
            if (content.match(/<Link[^>]*>.*?\([pP]lus, we['’]ll optimize.*?for free\).*?<\/Link>/si)) {
                 console.log(`Found bad <Link> tag in: ${fullPath}`);
            }
        }
    }
}

console.log("Searching for bad buttons...");
findBadLinks(path.join(process.cwd(), 'app'));
findBadLinks(path.join(process.cwd(), 'components'));
console.log("Done searching.");
