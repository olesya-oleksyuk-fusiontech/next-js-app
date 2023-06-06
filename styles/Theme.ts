// This is the type definition for my theme object.
export type ThemeType = typeof commonTheme & typeof lightTheme;
export type ColorSchemeType = typeof lightTheme;

export const commonTheme = {
  fontSize: {
    xxl: '2.5rem',
    xl: '2rem',
    lg: '1.5rem',
    md: '1.2rem',
    sm: '1rem',
  },
};
export const lightTheme = {
  body: '#FFF',
  main: '#363537',
  secondary: '#666',
  toggleBorder: '#FFF',
  background: '#363537',
  link: '#0070f3',

};
export const darkTheme: ColorSchemeType = {
  body: '#363537',
  main: '#FAFAFA',
  secondary: '#a8a6a3',
  toggleBorder: '#6B8096',
  background: '#999',
  link: '#b70202',
};
