import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), svgr(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      // shared 폴더
      { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
      /* features 내부 폴더들 */
      {
        find: "@apply",
        replacement: path.resolve(__dirname, "src/features/apply"),
      },
      {
        find: "@main",
        replacement: path.resolve(__dirname, "src/features/main"),
      },
      { find: "@my", replacement: path.resolve(__dirname, "src/features/my") },
      {
        find: "@partpage",
        replacement: path.resolve(__dirname, "src/features/partpage"),
      },
      {
        find: "@project",
        replacement: path.resolve(__dirname, "src/features/project"),
      },
      {
        find: "@recruit",
        replacement: path.resolve(__dirname, "src/features/recruit"),
      },
    ],
  },
});
