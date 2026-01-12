"use client";

import React, { useEffect } from 'react';

const BookingCalendar: React.FC = () => {
    useEffect(() => {
        (function (C: any, A: string, L: string) {
            let p = function (a: any, ar: any) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        (window as any).Cal("init", "15min", { origin: "https://app.cal.com" });

        (window as any).Cal.ns["15min"]("inline", {
            elementOrSelector: "#my-cal-inline-15min",
            config: { "layout": "month_view", "theme": "dark" },
            calLink: "brendan-dillon-4pkhkd/15min",
        });

        (window as any).Cal.ns["15min"]("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
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

                <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-15min"></div>
            </div>
        </section>
    );
};

export default BookingCalendar;
