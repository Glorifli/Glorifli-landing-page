import { google } from "googleapis";

/**
 * Ping the Google Indexing API to notify about a newly published or updated URL.
 * 
 * @param url The exact and absolute URL of the page that was published or updated
 * @returns An object indicating the success status and the API response
 */
export async function notifyGoogleIndexing(url: string) {
  try {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    // Handle multiline private keys from env string
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!clientEmail || !privateKey) {
      console.warn("Google Indexing API credentials are missing from .env");
      return { success: false, error: "Missing configuration" };
    }

    // Authenticate with a Google Service Account
    const jwtClient = new google.auth.JWT(
      clientEmail,
      undefined,
      privateKey,
      ["https://www.googleapis.com/auth/indexing"],
      undefined
    );

    // Initialize the API client
    const indexing = google.indexing({
      version: "v3",
      auth: jwtClient,
    });

    // Make the API request
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: "URL_UPDATED", // Use URL_UPDATED for new pages or recent modifications
      },
    });

    console.log(`Successfully pinged Google Indexing API for ${url}`);
    return { success: true, data: response.data };

  } catch (error) {
    console.error(`Error pinging Google Indexing API for ${url}:`, error);
    return { success: false, error };
  }
}
