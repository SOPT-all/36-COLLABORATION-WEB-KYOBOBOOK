import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; // 절대경로 설정을 위해 추가

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'), // '@/...'를 'src/...'로 인식하게 함
    },
  },
});
