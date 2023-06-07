import 'styled-components';
import type { ThemeType } from './themeObjects/default.utils';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {
  }
}
