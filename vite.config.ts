import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Enables file watching
    },
    hmr: true, // Enables hot module replacement
  },
});
