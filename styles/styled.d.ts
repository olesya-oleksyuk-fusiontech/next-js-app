import 'styled-components';

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface DefaultTheme {
        body: string;
        main: string;
        secondary: string;
        toggleBorder: string;
        background: string;
        link: string;
        fontSize: {
            xxl: string;
            xl: string;
            lg: string;
            md: string;
            sm: string;
        };
    }
}
