const fs = require('fs');
const path = require('path');
const postsDir = path.join(process.cwd(), 'content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
files.forEach(file => {
    const fullPath = path.join(postsDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes("plus, we'll optimize")) {
        content = content.replace(/\s*\(plus, we'll optimize your Google My Business profile for free\)/g, '');
        content = content.replace(/(\]\(https:\/\/glorifli\.com\/#calendar\))/g, `$1 (plus, we'll optimize your Google My Business profile for free)`);
        fs.writeFileSync(fullPath, content);
        console.log('Fixed', file);
    }
});
