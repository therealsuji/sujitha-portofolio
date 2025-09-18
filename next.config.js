/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
  },
  // Add PostHog rewrites
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // Support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default config;
