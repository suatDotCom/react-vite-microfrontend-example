import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDevelopment = command === 'serve';
  
  return {
    plugins: [
      react(),
      federation({
        name: 'remote-components',
        filename: 'remoteEntry.js',
        exposes: {
          './Button': './src/components/Button',
          './Card': './src/components/Card',
          './Header': './src/components/Header'
        },
        shared: ['react', 'react-dom', 'styled-components'],
        // Development modunda federation'ı dev-friendly yapalım
        ...(isDevelopment && {
          dev: {
            enabled: true,
            hot: true,
          }
        })
      })
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      watch: isDevelopment ? {} : null, // Development modunda watch modunu aktif et
      rollupOptions: {
        output: {
          format: 'esm',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].[hash].js'
        }
      },
      commonjsOptions: {
        ignore: ['@vite/client', 'vite']
      }
    },
    preview: {
      port: 3001,
      strictPort: true,
      host: true
    },
    server: {
      port: 3001,
      strictPort: true,
      host: true,
      cors: true,
      hmr: {
        port: 3001,
        protocol: 'ws',
        clientPort: 3001,
        host: 'localhost',
        timeout: 120000,
        overlay: true, // Hata overlay'ini aktif ediyoruz
        path: '@hmr', // HMR için özel path
      },
      watch: {
        usePolling: true,
        interval: 1000,
      }
    },
  }
})
