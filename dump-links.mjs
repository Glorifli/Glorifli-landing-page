import fs from 'fs';
import path from 'path';

function findFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('calendar')) {
                const lines = content.split('\n');
                lines.forEach((line, i) => {
                    if (line.includes('href="#calendar"') || line.includes('href="/#calendar"')) {
                        console.log(`[${fullPath}:${i+1}]`);
                        // Print context
                        const start = Math.max(0, i - 2);
                        const end = Math.min(lines.length, i + 5);
                        console.log(lines.slice(start, end).join('\n'));
                        console.log('---');
                    }
                });
            }
        }
    }
}

findFiles(path.join(process.cwd(), 'components'));
findFiles(path.join(process.cwd(), 'app'));
