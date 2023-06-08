import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useColorTheme } from '../hooks/useColorTheme';
import { createTheme } from '../styling/theme/default.utils';
import ThemeToggler from '../components/Toggler';
import GlobalStyle from '../styling/Global';

const App = ({
  Component,
  pageProps,
}: AppProps) => {
  const [currTheme, toggleTheme] = useColorTheme();
  const theme = createTheme(currTheme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeToggler currTheme={currTheme} onToggle={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
