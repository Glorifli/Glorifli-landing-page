async function triggerLeadAPI() {
    try {
        console.log("Sending POST request to http://localhost:3000/api/leads...");
        const res = await fetch("http://localhost:3000/api/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "API Test",
                email: "api@test.com",
                website: "https://apitest.com",
                leadType: "hero-seo-audit"
            })
        });

        const data = await res.text();
        console.log("Status:", res.status);
        console.log("Response:", data);
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}

triggerLeadAPI();
