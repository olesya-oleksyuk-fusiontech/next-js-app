import { useEffect, useState } from 'react';

export type ThemeOptionType = 'dark' | 'light';

export const useColorTheme = () => {
  const [currTheme, setTheme] = useState<ThemeOptionType>('light');

  const setMode = (mode: ThemeOptionType) => {
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

    const localTheme = window.localStorage.getItem('theme') as ThemeOptionType | null;
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
