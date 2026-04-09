import fs from 'fs';
import path from 'path';

function findFiles(dir, matchList) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findFiles(fullPath, matchList);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.toLowerCase().includes("plus, we")) {
                matchList.push(fullPath);
            }
        }
    }
}

const matches = [];
findFiles(path.join(process.cwd(), 'components'), matches);
findFiles(path.join(process.cwd(), 'app'), matches);

matches.forEach(m => console.log(m));
