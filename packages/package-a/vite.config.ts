import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import type { TransformModePatterns } from 'vitest'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // @ts-ignore
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
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
