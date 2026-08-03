const isProd = process.env.NODE_ENV === "production";
const basePath = "/my-academic-portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? basePath : "",
  assetPrefix: isProd ? basePath : "",
  images: { unoptimized: true },
};

export default nextConfig;
