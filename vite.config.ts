// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "frontend/client", // Ensure this is correct
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "frontend/client"), // Fix import paths
    },
  },
  server: {
    port: 5173, // Ensure port is correct
  },
});
