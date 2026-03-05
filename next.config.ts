import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // Content Security Policy — whitelists all required third-party origins
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: self + cal.com embed + leadsy analytics + vercel speed insights
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.cal.com https://r2.leadsy.ai https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      // Styles: self + inline (needed for Tailwind + framer-motion)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + data URIs + google user content (testimonial avatars) + leadsy
      "img-src 'self' data: blob: https://lh3.googleusercontent.com https://wvbknd.leadsy.ai",
      // Frames: cal.com embed
      "frame-src 'self' https://app.cal.com https://cal.com",
      // Connections: API calls the site makes
      "connect-src 'self' https://app.cal.com https://wvbknd.leadsy.ai https://r2.leadsy.ai https://services.leadconnectorhq.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
      // Workers (framer-motion / next internals)
      "worker-src 'self' blob:",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
