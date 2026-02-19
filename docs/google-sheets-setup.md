# Google Sheets Integration Setup Guide

This guide details how to set up the necessary credentials to allow the Glorifli landing page to securely save leads to your Google Sheet.

## Prerequisites
- A Google Cloud Platform (GCP) account.
- Access to the Vercel dashboard for your project.

## Step 1: Create a Google Service Account

1.  **Go to Google Cloud Console**: [https://console.cloud.google.com/](https://console.cloud.google.com/)
2.  **Create a New Project** (or select an existing one). Name it something like "Glorifli Landing Page".
3.  **Enable the Google Sheets API**:
    - In the search bar at the top, type "Google Sheets API".
    - Click on "Google Sheets API" from the marketplace results.
    - Click **Enable**.
4.  **Create Service Account**:
    - Navigate to **IAM & Admin** > **Service Accounts**.
    - Click **+ CREATE SERVICE ACCOUNT**.
    - **Name**: e.g., `glorifli-sheets-integration`.
    - **ID**: Can be left as default.
    - Click **Create and Continue**.
    - **Role**: Select **Basic** > **Editor** (or strict permissions if you prefer, but Editor is easiest for setup).
    - Click **Done**.
5.  **Generate Keys**:
    - Click on the newly created service account email (e.g., `glorifli-sheets-integration@...`).
    - Go to the **Keys** tab.
    - Click **Add Key** > **Create new key**.
    - Select **JSON** and click **Create**.
    - A `.json` file will automatically download (e.g., `project-id-...json`). **Keep this safe!**

## Step 2: Share the Google Sheet

1.  Open your Google Sheet: `https://docs.google.com/spreadsheets/d/17EpCKe7iRGiFY7Z73omtdwQubxVa2kGPLIr03yC5PHQ`
2.  Click the **Share** button in the top right.
3.  Open the `.json` file you downloaded in Step 1.
4.  Find the `"client_email"` field (e.g., `glorifli-sheets-integration@project-id.iam.gserviceaccount.com`).
5.  Copy this email and paste it into the Google Sheets share dialog.
6.  Ensure **Editor** permissions are selected.
7.  Click **Send** (uncheck "Notify people" if you want).

## Step 3: Add Credentials to Vercel

1.  **Go to Vercel Dashboard**: [https://vercel.com/dashboard](https://vercel.com/dashboard)
2.  Select your project (`glorifli-landing-page`).
3.  Go to **Settings** > **Environment Variables**.
4.  **Add Variable 1**:
    - **Key**: `GOOGLE_SHEETS_CLIENT_EMAIL`
    - **Value**: Paste the `"client_email"` from your `.json` file.
    - Select environments: **Production**, **Preview**, **Development** (optional, for local testing).
    - Click **Save**.
5.  **Add Variable 2**:
    - **Key**: `GOOGLE_SHEETS_PRIVATE_KEY`
    - **Value**:
        - Open your `.json` file.
        - Find the `"private_key"` field. It will look like `"-----BEGIN PRIVATE KEY-----\nMIIEv...`.
        - **Copy the entire string**, including the `-----BEGIN...` and `-----END...` parts.
        - Paste it directly into the Value field in Vercel. Vercel handles the newlines automatically.
    - Click **Save**.

## Step 4: Redeploy (Important!)

After adding environment variables, you **must redeploy** your application for them to take effect.
1.  Go to the **Deployments** tab in Vercel.
2.  Click the three dots (`...`) on the latest deployment.
3.  Select **Redeploy**.

Your form should now be working!
