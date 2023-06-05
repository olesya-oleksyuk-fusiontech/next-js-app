import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string
        main: string
        secondary: string
        toggleBorder: string
        background: string
        fontSize: {
            xxl: string
            xl: string
            lg: string
            md: string
            sm: string
        }
    }
}
