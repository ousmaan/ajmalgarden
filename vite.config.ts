import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
// NOTE (plan Phase 0): vite-plugin-singlefile intentionally dropped — at
// 1000s of products the catalog ships as split assets + static JSON snapshots
// (Vercel serves them; vercel.json rewrites SPA routes to /index.html).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    // OneDrive-locked zips + 100s of raw gallery photos must never be watched:
    // EBUSY on a locked file kills the whole dev server (seen 2026-09-28).
    watch: {
      ignored: ["**/ext-src/**", "**/gallery/**", "**/*.zip", "**/node_modules/**", "**/dist/**"],
    },
  },
});
