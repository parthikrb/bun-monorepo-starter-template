import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/package-b/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: '../../test-utils/setup.ts',
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true,
    },
  },
})
