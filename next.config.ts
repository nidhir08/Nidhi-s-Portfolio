import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

export default nextConfig;
