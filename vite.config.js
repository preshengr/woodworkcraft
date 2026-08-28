import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages under a subpath (e.g. /woodworkcraft/),
// set: base: "/woodworkcraft/"
export default defineConfig({
  plugins: [react()],
});