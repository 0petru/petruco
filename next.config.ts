import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Screenshot-urile de portofoliu vin inițial de pe Unsplash (imagini demo).
    // Când le înlocuim cu capturi reale din `/public/portfolio`, putem scoate
    // această intrare.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
