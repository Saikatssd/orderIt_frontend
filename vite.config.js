import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lodash: 'lodash-es',
    },
  },
  proxy: {
    '/api': 'http://localhost:4000',
  },
})

