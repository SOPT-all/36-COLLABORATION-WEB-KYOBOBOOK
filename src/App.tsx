import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { queryClient } from './utils/query-client';

// 페이지 컴포넌트 임포트
import Home from '@/pages/Home';
import HomeBest from '@/pages/HomeBest';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best" element={<HomeBest />} />
        </Routes>
        {/* 개발 환경일 때만 Devtools 보이도록 함 */}
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

