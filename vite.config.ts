import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  base: '/aishu_nova/', 
  build: {
    outDir: path.resolve(__dirname, "dist"),  // Set the output directory to 'dist'
    emptyOutDir: true,  // Clean the output directory before build
    assetsDir: "public",
  },
  server: {
    port: 3000, 
    open: true,  // Automatically open the browser
  watch: {
    usePolling: true, // This helps with file system watching in some environments
  }, // Change to another port if 3000 is causing issues
  },
});
