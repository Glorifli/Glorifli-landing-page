const path = require('path');

// 1. Force the absolute path to your .env file
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

// 2. Load the Google library
const { google } = require('googleapis');

// 3. System Check Logs
console.log("--- SYSTEM CHECK ---");
console.log("Looking for Email:", process.env.GOOGLE_CLIENT_EMAIL ? "✅ Found!" : "❌ MISSING!");
console.log("Looking for Key:", process.env.GOOGLE_PRIVATE_KEY ? "✅ Found!" : "❌ MISSING!");
console.log("--------------------\n");

async function runTest() {
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        console.log("🚨 Stopping test: Cannot connect to Google without the keys.");
        return;
    }

    try {
        console.log("Keys locked in. Authenticating with Google...");

        // Clean the key: This fixes line breaks AND removes accidental literal quotes
        const cleanKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n').replace(/"/g, '');

        // The Modern Object-Based Authentication
        const jwtClient = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL.replace(/"/g, ''), // Clean the email too
            key: cleanKey,
            scopes: ['https://www.googleapis.com/auth/indexing'],
        });

        await jwtClient.authorize();
        console.log("✅ Successfully authenticated!");

        const indexing = google.indexing('v3');
        const response = await indexing.urlNotifications.publish({
            auth: jwtClient,
            requestBody: {
                url: "https://glorifli.com",
                type: "URL_UPDATED"
            }
        });

        console.log("🚀 Google Pinged Successfully! Status Code:", response.status);

    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

// 4. Trigger the function
runTest();