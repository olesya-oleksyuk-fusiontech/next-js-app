import type { AppProps } from 'next/app';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { useMemo } from 'react';
import { GlobalStyles } from '../styles/Global';
import { commonTheme, darkTheme, lightTheme } from '../styles/Theme';
import { useDarkMode } from '../hooks/useDarkMode';
import { ThemeToggler } from '../components/toggler';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const [currTheme, toggleTheme] = useDarkMode();
  const theme: DefaultTheme = useMemo(() => {
    const themeMode = currTheme === 'light' ? lightTheme : darkTheme;
    return { ...themeMode, ...commonTheme };
  }, [currTheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeToggler currTheme={currTheme} onToggle={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
