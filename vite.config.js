import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
        tailwindcss(),

  ],
   base: './',
   build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lottie-web')) {
              return 'vendor_lottie'
            }
            return 'vendor'
          }
        }
      }
    },
    chunkSizeWarningLimit: 4000 // raise warning limit if you want (optional)
  }
})
