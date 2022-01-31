module.exports = {
  reactStrictMode: true,
};

const withBundlerAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundlerAnalyzer({});
