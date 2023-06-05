import { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { useMemo } from 'react';
import { GlobalStyles } from '../styles/Global';
import {
  commonTheme, darkTheme, lightTheme
} from '../styles/Theme';
import { ThemeToggler } from '../components/toggler';
import { useDarkMode } from '../hooks/useDarkMode';

export default function App({ Component, pageProps } : AppProps) {
  const [currTheme, toggleTheme, isMounted] = useDarkMode();
  const theme: DefaultTheme = useMemo(() => {
    const themeMode = currTheme === 'light' ? lightTheme : darkTheme;
    return { ...themeMode, ...commonTheme };
  }, [currTheme, isMounted]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      { isMounted
            && (
            <>
              <ThemeToggler currTheme={currTheme} onToggle={toggleTheme} />
              <Component {...pageProps} />
            </>
            )}
    </ThemeProvider>
  );
}
