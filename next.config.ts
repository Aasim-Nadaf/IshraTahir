import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  allowedDevOrigins: ["**.run.app", "*.run.app", "localhost:3000"],
};

export default nextConfig;
