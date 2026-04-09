const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'content/posts');
const filesToDelete = [
  'do-ai-chatbots-actually-increase-bookings.mdx',
  'how-to-write-sales-copy-that-sells-services.mdx',
  'what-makes-a-high-converting-landing-page.mdx',
  'seo-for-businesses.mdx',
  'your-practice-remains-stuck.mdx',
  'why-your-business-growth-has-stalled.mdx',
  'why-your-phone-isnt-ringing.mdx',
  'the-blue-link-era-is-dead.mdx',
  'whats-the-best-way-to-get-more-appointments-booked.mdx'
];

let deletedCount = 0;
filesToDelete.forEach(f => {
  const fullPath = path.join(dir, f);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    deletedCount++;
    console.log(`Deleted: ${f}`);
  }
});
console.log(`Successfully deleted ${deletedCount} files.`);
