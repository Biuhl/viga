import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/viga",
  trailingSlash: true,
  images: {
    unoptimized: true, // Desliga a otimização de servidor que quebra no GitHub Pages
  },
};

export default nextConfig;