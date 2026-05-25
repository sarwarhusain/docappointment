/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.praavahealth.com",
        pathname: "/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "ibb.co.com",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;
// ibb.co.com
