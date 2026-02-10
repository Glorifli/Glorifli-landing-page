import { google } from 'googleapis';

export async function appendLeadToSheet(name: string, email: string) {
    try {
        // 1. Prepare Authentication
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Fix for Vercel/Env newline issues
            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        // 2. Get Sheets Client
        const sheets = google.sheets({ version: 'v4', auth });

        // 3. Prepare Data
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
        const range = 'Sheet1!A:C'; // Assuming Name, Email, Date columns
        const valueInputOption = 'USER_ENTERED';

        const resource = {
            values: [
                [name, email, new Date().toISOString()]
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
