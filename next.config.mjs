/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom domain (anon.anonsagent.com) — served at root, so no base path prefix.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;