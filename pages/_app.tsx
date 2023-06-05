import '../styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/Global';
import { darkTheme, lightTheme } from '../styles/Theme';
import { Toggle } from '../components/toggler';
import { useDarkMode } from '../hooks/useDarkMode';

export default function App({ Component, pageProps } : AppProps) {
  const [theme, toggleTheme, isMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      { isMounted
            && (
            <>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
              <Component {...pageProps} />
            </>
            )}
    </ThemeProvider>
  );
}
