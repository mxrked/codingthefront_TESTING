// Reference: https://www.youtube.com/watch?v=KHS6Kru_uhM

const SITEMAP = require("nextjs-sitemap-generator");
const PATH = require("path");

SITEMAP({
  baseUrl: "https://codingthefront.com",
  pagesDirectory: PATH.resolve(__dirname, "../pages"),
  targetDirectory: PATH.resolve(__dirname, "../out/"),
  ignoredExtensions: [
    "js",
    "map",
    "json",
    "xml",
    "png",
    "css",
    "jpeg",
    "jpg",
    "icon",
  ],
  ignoredPaths: ["404"],
});
