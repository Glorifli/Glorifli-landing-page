import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const gbpOffer = " (plus, we'll optimize your Google My Business profile for free)";

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Fast fail if it already contains the offer to prevent double injection
    if (content.includes("optimize your Google My")) return;

    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {

        // Handle standard anchors and Links
        content = content.replace(/(<(?:Link|a)[^>]*href=["'](?:https:\/\/glorifli\.com)?\/?#calendar["'][^>]*>)(.*?)(<\/(?:Link|a)>)/g, (match, open, text, close) => {
            // we will append the text AFTER the link to avoid giant underline links in the UI, unless it's a button class.
            if (open.includes('bg-primary') || open.includes('button')) {
                // if it's a button, maybe don't add 15 words to it. Let's just append it OUTSIDE the link if we can, but JSX requires a parent. 
                // It's safer to put it inside the text for a button? Actually, let's just use a fragment or put it inside if it's text context.
                // The user said "everywhere that talks about jumping on call with me tell them I'll optimize their google my business profile for free"
            }
            return open + text + close + gbpOffer;
        });

        // Special override for BookingCalendar.tsx
        if (filePath.includes('BookingCalendar.tsx')) {
            content = original.replace(/Strategy Call<\/span>/g, `Strategy Call</span>\n                    <span className="block text-sm text-gray-400 mt-2 font-normal">(Plus, we'll optimize your Google My Business profile for free)</span>`);
        }
    }

    if (filePath.endsWith('.mdx') || filePath.endsWith('.md')) {
        content = content.replace(/(\[)([^\]]+)(\]\((?:https:\/\/glorifli\.com)?\/?#calendar\))/gi, (match, open, text, close) => {
            return open + text + gbpOffer + close;
        });
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated: ${filePath}`);
    }
}

walkDir('./app', processFile);
walkDir('./components', processFile);
walkDir('./content', processFile);
walkDir('./lib', processFile);

console.log("Sweep complete.");
