// generate-sitemap.js
const sitemap = require("svelte-sitemap-generator");

sitemap({
  assetsPath: "./static/",
  targetPath: "./static/sitemap.xml",
  hostname: "https://hannes-scheibelauer.at/",
  routes: [
    // Add your routes here
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/projects", changefreq: "weekly", priority: 0.8 },
    // Add more routes as needed
  ],
});
