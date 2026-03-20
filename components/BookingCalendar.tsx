"use client";

import React, { useEffect, useRef, useState } from 'react';

const BookingCalendar: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [calLoaded, setCalLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !calLoaded) {
                    setCalLoaded(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // start loading 200px before it enters view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [calLoaded]);

    // Dynamically import Cal only when needed
    useEffect(() => {
        if (!calLoaded) return;

        (async () => {
            const { getCalApi } = await import('@calcom/embed-react');
            const cal = await getCalApi();
            cal('ui', {
                theme: 'dark',
                hideEventTypeDetails: false,
                layout: 'column_view',
            });
            cal('on', {
                action: 'bookingSuccessful',
                callback: () => {
                    window.history.pushState({}, '', '/meeting-booked');
                },
            });
        })();
    }, [calLoaded]);

    return (
        <section
            id="calendar"
            ref={sectionRef}
            className="py-24 px-6 bg-surface relative overflow-hidden text-center"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                    Schedule Your Free <span className="text-primary">Strategy Call</span>
                    <span className="block text-sm text-gray-400 mt-2 font-normal">(Plus, we'll optimize your Google My Business profile for free)</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                    Diagnose your problem, get free advice, and leave with a mock draft of your new site.
                </p>

                <div className="cal-embed-wrapper w-full h-[650px] overflow-hidden rounded-2xl border border-white/10">
                    {calLoaded ? (
                        <CalEmbed />
                    ) : (
                        /* Skeleton placeholder shown before user scrolls here */
                        <div className="w-full h-full bg-white/5 animate-pulse rounded-2xl flex items-center justify-center">
                            <span className="text-gray-500 text-sm">Loading calendar…</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

/* Separate component so it can be rendered only after calLoaded = true */
function CalEmbed() {
    const [Cal, setCal] = useState<React.ComponentType<any> | null>(null);

    useEffect(() => {
        import('@calcom/embed-react').then((mod) => setCal(() => mod.default));
    }, []);

    if (!Cal) return null;

    return (
        <Cal
            calLink="brendan-dillon-4pkhkd/15min"
            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
            config={{ layout: 'column_view', theme: 'dark' }}
        />
    );
}

export default BookingCalendar;
