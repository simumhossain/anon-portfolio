/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages project site — served under /anon-portfolio/, so all assets
  // must be prefixed with the base path or they 404 (CSS/fonts → unstyled page).
  basePath: "/anon-portfolio",
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;