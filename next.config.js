/** @type {import('next').NextConfig} */
const withSvgr = require("next-plugin-svgr")

const { webpack } = withSvgr()

const nextConfig = {
  webpack,
}

module.exports = nextConfig
