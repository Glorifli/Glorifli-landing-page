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

    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        // Use 'gs' flags to match across newlines
        content = content.replace(/(<(?:Link|a)[^>]*href=["'](?:https:\/\/glorifli\.com)?\/?#calendar["'][^>]*>)(.*?)(<\/(?:Link|a)>)/gs, (match, open, text, close) => {
            if (open.includes('BookingCalendar.tsx')) return match;
            if (text.includes("Google My Business")) return match;

            // if it's already in the open tag somehow?
            if (match.includes("Google My Business")) return match;

            return open + text + gbpOffer + close;
        });

        // specific BookingCalendar check in case it missed it earlier, though it succeeded
        if (filePath.includes('BookingCalendar.tsx')) {
            if (!content.includes("optimize your Google My Business profile")) {
                content = original.replace(/Strategy Call<\/span>/gs, `Strategy Call</span>\n                    <span className="block text-sm text-gray-400 mt-2 font-normal">(Plus, we'll optimize your Google My Business profile for free)</span>`);
            }
        }
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated Multi-Line: ${filePath}`);
    }
}

walkDir('./app', processFile);
walkDir('./components', processFile);
walkDir('./content', processFile);
walkDir('./lib', processFile);

console.log("Secondary multi-line sweep complete.");
