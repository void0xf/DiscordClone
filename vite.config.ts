/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgrPlugin({})],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./test/setup.ts",
  },
});
