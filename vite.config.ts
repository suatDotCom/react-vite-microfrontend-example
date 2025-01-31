import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDevelopment = command === "serve";

  return {
    plugins: [
      react(),
      federation({
        name: "host-app",
        remotes: {
          remoteComponents: isDevelopment
            ? "http://localhost:3001/dist/assets/remoteEntry.js"
            : "http://localhost:3001/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom", "styled-components"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
      commonjsOptions: {
        ignore: ["@vite/client", "vite"],
      },
    },
    preview: {
      port: 3000,
      strictPort: true,
      host: true,
    },
    server: {
      port: 3000,
      strictPort: true,
      host: true,
      hmr: {
        port: 3000,
        clientPort: 3000,
      },
    },
  };
});
