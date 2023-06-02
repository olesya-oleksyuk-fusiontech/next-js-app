import '../styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { GlobalStyles } from '../styles/Global';
import { darkTheme, lightTheme } from '../styles/Theme';
import { Toggle } from '../components/toggler';

export default function App({ Component, pageProps } : AppProps) {
  const darkmode = useDarkMode(false);
  const theme = darkmode.value ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toggle theme={darkmode.value ? 'dark' : 'light'} toggleTheme={darkmode.toggle} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
