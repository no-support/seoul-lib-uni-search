import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/seoul-lib-uni-search/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
  server: {
    proxy: {
      '/gangseo': {
        target: 'https://lib.gangseo.seoul.kr/api/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gangseo/, ''),
      },
      '/gangbuk': {
        target: 'https://www.gblib.or.kr/ajaxForKolas.do',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gangbuk/, ''),
      },
      '/guro': {
        target:
          'https://lib.guro.go.kr/pyxis-api/1/collections/1/search?title=',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guro/, ''),
      },
      '/geumcheon': {
        target: 'https://geumcheonlib.seoul.kr/book/bookSearchList',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/geumcheon/, ''),
      },
      '/nowon': {
        target: 'https://www.nowonlib.kr/api/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nowon/, ''),
      },
      '/seocho': {
        target: 'https://public.seocholib.or.kr/api/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/seocho/, ''),
      },
      '/eunpyeong': {
        target: 'https://www.eplib.or.kr/api/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/eunpyeong/, ''),
      },
    },
  },
});
