import { useEffect, useState } from 'react';

export type ThemeType = 'dark' | 'light';

export const useDarkMode = () => {
  const [currTheme, setTheme] = useState<ThemeType>('light');

  const setMode = (mode: ThemeType) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (currTheme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    function handleDarkModePreferredChange() {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }

    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleDarkModePreferredChange);

    const localTheme = window.localStorage.getItem('theme') as ThemeType | null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localTheme) {
      setMode(localTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleDarkModePreferredChange);
    };
  }, []);

  return [currTheme, toggleTheme] as const;
};
