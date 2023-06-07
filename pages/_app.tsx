import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../theme/Global';
import { useColorTheme } from '../hooks/useColorTheme';
import { createTheme } from '../theme/themeObjects/default.utils';
import ThemeToggler from '../components/Toggler';

const App = ({
  Component,
  pageProps,
}: AppProps) => {
  const [currTheme, toggleTheme] = useColorTheme();
  const theme = createTheme(currTheme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeToggler currTheme={currTheme} onToggle={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
