import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@emotion/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { theme } from '@/styles/theme';
import GlobalStyles from '@/styles/GlobalStyle';
import { queryClient } from '@/utils/query-client';
import pageRoutes from '@/routes/pageRoutes';

const router = createBrowserRouter(pageRoutes);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
