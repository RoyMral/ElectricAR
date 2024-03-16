import { defineConfig } from "vite";
import { readFileSync } from "fs";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: readFileSync("./ssl/key.pem"),
      cert: readFileSync("./ssl/cert.pem"),
    },
  },
});
