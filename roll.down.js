import { defineConfig } from "rolldown"

export default defineConfig({
  input: ["app.js", "routes/"],
  output: {
    dir: ".noc",
    sourcemap: "inline",
  },
  platform: "node",
  resolve: {
    alias: {},
  },
})
