import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  loader: "jsx",
  include: /src\/.*\.js$/,
});
