import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.cal.com https://r2.leadsy.ai https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://lh3.googleusercontent.com https://wvbknd.leadsy.ai",
      "frame-src 'self' https://app.cal.com https://cal.com",
      "connect-src 'self' https://app.cal.com https://wvbknd.leadsy.ai https://r2.leadsy.ai https://services.leadconnectorhq.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
      "worker-src 'self' blob:",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // ── Image Optimisation ────────────────────────────────────────────────────
  images: {
    // Prefer AVIF, fall back to WebP — dramatically smaller at same quality
    formats: ["image/avif", "image/webp"],
    // 1-year cache for optimised images served by Next.js Image API
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },

  // ── Compiler Optimisations ───────────────────────────────────────────────
  compiler: {
    // Strip console.* calls from production builds
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ── Bundle Optimisation ──────────────────────────────────────────────────
  // Tree-shake large icon/animation packages — only ship code that's used
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Instruct browsers/CDN to cache hashed static assets for 1 year
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;

