import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "サイトの色確認",
  description: "サイトの色（カラーコード）を知ることができます。",
  version: "1.0.0",
  icons: {
    16: "img/icon16.png",
    48: "img/icon48.png",
    128: "img/icon128.png",
  },
  content_scripts: [
    {
      js: ["src/content/main.ts"],
      matches: ["http://*/*", "https://*/*"],
    },
  ],
  action: {
    default_popup: "src/popup/index.html",
    default_icon: "img/icon16.png",
  },
});

export default defineConfig({
  plugins: [crx({ manifest })],
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
});
