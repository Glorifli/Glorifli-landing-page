import { NextResponse } from 'next/server';
import { appendLeadToSheet } from '@/lib/google-sheets';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            websiteUrl = '',
            website = '',
            source = '',
            leadType = '',
        } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Accept either websiteUrl or website field name (Hero uses 'website', PopupForm uses 'websiteUrl')
        const resolvedWebsite = websiteUrl || website;
        const resolvedSource = source || leadType;

        // Append to "Glorifli Email List" sheet
        await appendLeadToSheet(name, email, resolvedWebsite, resolvedSource);

        return NextResponse.json(
            { message: 'Lead successfully captured' },
            { status: 200 }
        );

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
