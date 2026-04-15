const { defineConfig } = require("vite");
const tailwindcss = require("@tailwindcss/vite").default;

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
    outDir: "../dist",
    emptyOutDir: true,
  },
});
