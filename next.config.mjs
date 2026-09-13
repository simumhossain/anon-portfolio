/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom domain (anon.anonsagent.com) — served at root, no path prefix.
  basePath: "/",
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;