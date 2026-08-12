import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "commons.wikimedia.org", pathname: "/wiki/Special:Redirect/file/**" },
      { protocol: "https", hostname: "c.shld.net", pathname: "/rpx/i/s/pi/mp/9150/**" },
      { protocol: "https", hostname: "africaproducts.nl", pathname: "/cdn/shop/products/**" },
      { protocol: "https", hostname: "s.alicdn.com", pathname: "/@sc04/**" },
      { protocol: "https", hostname: "live.staticflickr.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
