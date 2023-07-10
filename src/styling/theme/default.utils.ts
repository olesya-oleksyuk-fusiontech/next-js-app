import _defaultsDeep from 'lodash/defaultsDeep';
import defaultTheme from './defaultTheme';
import darkTheme from './darkTheme';
import type { ThemeOptionType } from '../../hooks/useColorTheme';

export type ThemeType = typeof defaultTheme;

export const createTheme = (currTheme: ThemeOptionType = 'light'): ThemeType => {
  if (currTheme === 'dark') {
    return _defaultsDeep(darkTheme, defaultTheme);
  }
  return defaultTheme;
};
