const defaultTheme = {
  currTheme: 'light',
  svgFilters: {
    black: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(18%) hue-rotate(293deg) brightness(102%) contrast(105%)',
    white: 'brightness(0) saturate(100%) invert(100%) sepia(5%) saturate(11%) hue-rotate(77deg) brightness(104%) contrast(100%)',
  },
  colors: {
    body: '#FFF',
    text: {
      main: '#363537',
      secondary: '#666',
    },
    toggle: {
      border: '#FFF',
      background: '#4ad6fe',
      hover: '#a61414',
    },
    background: '#363537',
    link: '#0070f3',
  },
  font: {
    size: {
      xxl: '2.5rem',
      xl: '2rem',
      lg: '1.5rem',
      md: '1.2rem',
      sm: '18px',
    },
    family: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,' +
      'Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
};

export default defaultTheme;
