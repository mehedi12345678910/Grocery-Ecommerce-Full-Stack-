/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains:["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        // port: "",
        // pathname: "/my-bucket/**",
        // search: "",

      },
    ],
  },
};

export default nextConfig;
