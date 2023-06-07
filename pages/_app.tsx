import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../theme/Global';
import { ThemeToggler } from '../components/toggler';
import { useColorTheme } from '../hooks/useColorTheme';
import { createTheme } from '../theme/themeObjects/default.utils';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const [currTheme, toggleTheme] = useColorTheme();
  const theme = createTheme(currTheme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeToggler currTheme={currTheme} onToggle={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
