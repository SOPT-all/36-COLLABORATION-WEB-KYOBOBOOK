import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from './utils/query-client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 개발 환경일 때만 Devtools 보이도록 함 */}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default App;
