import { google } from 'googleapis';

export async function appendLeadToSheet(
    name: string,
    email: string,
    websiteUrl: string = '',
    source: string = '',
) {
    try {
        // 1. Prepare Authentication
        let rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY || '';

        // Vercel frequently wraps environment variables in literal double quotes. Strip them.
        if (rawKey.startsWith('"') && rawKey.endsWith('"')) {
            rawKey = rawKey.substring(1, rawKey.length - 1);
        }
        if (rawKey.startsWith("'") && rawKey.endsWith("'")) {
            rawKey = rawKey.substring(1, rawKey.length - 1);
        }

        // Safely map literal backend `\n` characters to actual linebreaks for the RSA parser
        const formattedKey = rawKey.replace(/\\n/g, '\n');

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: formattedKey,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        // 2. Get Sheets Client
        const sheets = google.sheets({ version: 'v4', auth });

        // 3. Target the "Sheet1" tab — columns: Name | Email | Website | Source | Date
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
        const range = 'Sheet1!A:E';
        const valueInputOption = 'RAW'; // Prevents data validation crashes on weird text

        const finalWebsite = (websiteUrl === 'No website' || !websiteUrl) ? '' : websiteUrl;

        const resource = {
            values: [
                [name, email, finalWebsite, source || "Email 1 (Received Lead Magnet)"],
            ],
        };

        // 4. Append Data
        const result = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption,
            requestBody: resource,
        });

        return result;

    } catch (error) {
        console.error('Error appending to Google Sheet:', error);
        throw error;
    }
}
