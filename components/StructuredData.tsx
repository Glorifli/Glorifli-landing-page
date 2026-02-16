import React from "react";

type StructuredDataProps = {
    data: Record<string, any>;
};

/**
 * A reusable component to inject JSON-LD structured data into the head of the document.
 * This is crucial for AEO (Answer Engine Optimization) to help AI agents understand the content.
 */
export default function StructuredData({ data }: StructuredDataProps) {
    let jsonString = "";
    try {
        jsonString = JSON.stringify(data);
    } catch (e) {
        // Prevent crashing if circular dependency exists, but log error
        console.error("StructuredData JSON.stringify error:", e);
        return null;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonString }}
        />
    );
}
