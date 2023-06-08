import 'styled-components';
import type { ThemeType } from './theme/default.utils';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {
  }
}
