import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import { useColorTheme } from '../hooks/useColorTheme';
import { createTheme } from '../styling/theme/default.utils';
import GlobalStyle from '../styling/Global';

const App = ({
  Component,
  pageProps,
}: AppProps) => {
  const [currTheme, toggleTheme] = useColorTheme();
  const theme = createTheme(currTheme);
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} toggleTheme={toggleTheme} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
