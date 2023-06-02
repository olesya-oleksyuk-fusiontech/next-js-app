import '../styles/global.css';
import { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/Global';
import { darkTheme, lightTheme } from '../styles/Theme';
import { Toggle } from '../components/toggler';

export default function App({ Component, pageProps } : AppProps) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
