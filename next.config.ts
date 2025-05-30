import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
        pathname: "/public/**",
      },
      new URL("http://192.168.0.27:1337/uploads/*"),
      new URL("http://localhost:1337/uploads/*"),
      {
        protocol: "https",
        hostname: "strapi.loancrm.xyz",
        pathname: "/uploads/*",
      },
    ],
  },
};

export default nextConfig;