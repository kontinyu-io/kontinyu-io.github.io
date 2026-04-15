const { defineConfig } = require("vite");
const tailwindcss = require("@tailwindcss/vite").default;
const path = require("node:path");

module.exports = defineConfig({
  root: "src",
  base: "./",
  plugins: [tailwindcss()],
  server: {
    host: "127.0.0.1",
    port: 4321,
  },
  preview: {
    host: "127.0.0.1",
    port: 4321,
  },
  build: {
    outDir: path.resolve(__dirname, "docs"),
    emptyOutDir: true,
  },
});
