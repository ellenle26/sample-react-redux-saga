let apiUrl = "http://localhost:9000/api/v1"; // for server side
let apiClientUrl = "http://localhost:3000/api"; // for client side

switch (process.env.APP_ENV) {
  case "prd":
    break;
  case "dev":
    break;
  case "local":
    break;
  default:
    apiUrl = "http://localhost:9000/api/v1";
}

module.exports = {
  reactStrictMode: true,
  env: {
    apiUrl: apiUrl,
    apiClientUrl: apiClientUrl,
  },
  async headers() {
    return [
      {
        source: "/(.*)?", // Matches all pages
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};
