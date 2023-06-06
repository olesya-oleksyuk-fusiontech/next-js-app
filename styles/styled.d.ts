import 'styled-components';
import type { ThemeType } from './Theme';

declare module 'styled-components' {
    // eslint-disable-next-line
    export interface DefaultTheme extends ThemeType {}
}
