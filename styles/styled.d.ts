import 'styled-components';

declare module 'styled-components' {
    export interface IDefaultTheme {
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
