const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = "/my-academic-portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isGithubPages ? basePath : "",
  assetPrefix: isGithubPages ? basePath : "",
  images: { unoptimized: true },
};

export default nextConfig;
