import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light'

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
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
    } else {
      setMode('light');
    }

    setIsMounted(true);
    // good housekeeping to remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleDarkModePreferredChange);
    };
  }, []);

  return [theme, toggleTheme, isMounted] as const;
};
