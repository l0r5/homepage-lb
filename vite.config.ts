import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
      plugins: [
        ['@swc/plugin-emotion', {}]
      ]
    })
  ],
  server: {
    port: 3000
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          chakra: ['@chakra-ui/react', '@chakra-ui/icons', '@chakra-ui/theme-tools'],
          three: ['three']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@chakra-ui/react']
  }
})
