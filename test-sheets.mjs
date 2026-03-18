import { google } from 'googleapis';
import path from 'path';

async function testSheets() {
    console.log('Testing Google Sheets Connection...');
    try {
        const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
        const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

        console.log({
            hasClientEmail: !!clientEmail,
            clientEmail: clientEmail,
            hasPrivateKey: !!privateKey,
            privateKeyStart: privateKey ? privateKey.substring(0, 30) : 'none',
            hasSpreadsheetId: !!spreadsheetId,
            spreadsheetId: spreadsheetId,
        });

        if (!clientEmail || !privateKey || !spreadsheetId) {
            console.error('MISSING ENVIRONMENT VARIABLES!');
            return;
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const range = 'Sheet1!A:E';
        const valueInputOption = 'RAW';

        const resource = {
            values: [
                ["Test Name", "test@test.com", "https://test.com", "Test Source"]
            ],
        };

        console.log('Attempting to append...');
        const result = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption,
            requestBody: resource,
        });

        console.log('SUCCESS! Response:', result.data);

    } catch (error) {
        console.error('\n==== GOOGLE SHEETS API ERROR ====');
        console.error(error.message);
        console.error('Full Error:', error);
    }
}

testSheets();
