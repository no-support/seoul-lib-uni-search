import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
  // server: {
  //   proxy: {
  //     '/foo': {
  //       target: 'https://lib.guro.go.kr/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/foo/, ''),
  //     },
  //     '/bar': {
  //       target: 'https://lib.dongjak.go.kr/dj/index.do',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/bar/, ''),
  //     },
  //   },
  // },
});
