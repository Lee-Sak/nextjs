/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,

  // redirece를 시키고, url도 지정한 값으로 변함
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "https://naver.com",
        permanent: false,
      },
      {
        source: "/old-blog/:path",
        destination: "/new-blog/:path",
        permanent: false,
      },
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },

  // redirect를 시키기는 하지만, url은 변하지 않음
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
