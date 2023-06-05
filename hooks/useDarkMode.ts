import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light'

export const useDarkMode = () => {
  const [currTheme, setTheme] = useState<Theme>('light');
  // use isMounted to determine when the app has mounted and display it only when isMounted is true.
  // This way removed the brief flicker (due to Next.js SSR rendering)
  // https://blog.logrocket.com/theming-in-next-js-with-styled-components-and-usedarkmode/
  const [isMounted, setIsMounted] = useState(false);

  // use localStorage to persist a preferred theme between sessions in the browser
  const setMode = (mode: Theme) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    currTheme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    function handleDarkModePreferredChange() {
      window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme('dark') : setTheme('light');
    }

    //  register an event-listener to detect user's prefers-color-scheme change
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleDarkModePreferredChange);

    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localTheme) {
      setMode(localTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }

    setIsMounted(true);
    // good housekeeping to remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleDarkModePreferredChange);
    };
  }, []);

  return [currTheme, toggleTheme, isMounted] as const;
};
