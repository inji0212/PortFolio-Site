// next.config.mjs
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(process.cwd(), "src");
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};

export default nextConfig;
