"use client";

import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const BookingCalendar: React.FC = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                "theme": "dark",
                "hideEventTypeDetails": false,
                "layout": "column_view"
            });
        })();
    }, []);

    return (
        <section id="calendar" className="py-24 px-6 bg-surface relative overflow-hidden text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                    Schedule Your Free <span className="text-primary">Strategy Call</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                    Diagnose your problem, get free advice, and leave with a mock draft of your new site.
                </p>

                {/* The Cal component handles loading and rendering the calendar seamlessly */}
                <div className="w-full h-auto min-h-[520px] overflow-hidden">
                    <Cal
                        calLink="brendan-dillon-4pkhkd/15min"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ layout: 'column_view', theme: 'dark' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BookingCalendar;
