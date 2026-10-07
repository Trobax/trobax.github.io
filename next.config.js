// Next.js 16 configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export -> ./out (deployed to GitHub Pages by .github/workflows/deploy.yml)
  output: "export",
  // next/image optimization needs a server; serve images as-is in a static export
  images: { unoptimized: true },
};

export default nextConfig;