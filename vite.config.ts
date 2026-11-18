import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    // Editor atomic-save temp dirs (e.g. ".style.css.<hash>.tmpdir") can be
    // locked on Windows and crash the file watcher with EBUSY.
    watch: {
      ignored: ['**/.*.tmpdir/**', '**/*.tmp'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.ts',
  },
});
