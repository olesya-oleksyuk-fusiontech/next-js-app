import '../styles/global.css';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/Global';
import { darkTheme, lightTheme } from '../styles/Theme';
import { Toggle } from '../components/toggler';

export default function App({ Component, pageProps } : AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
