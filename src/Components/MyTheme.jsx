import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define your custom theme
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
    h1: {
      fontSize: '64px',
      fontWeight: 400,
      color: '#000000',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#000000',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
      color: '#000000',
    },
    h6: {
     
      fontWeight: 700,
      color: '#000000',
    },
    body1: {
      color: '#000000',
    },
    body2: {
      color: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        containedPrimary: {
          backgroundColor: '#000000',
          '&:hover': {
            backgroundColor: '#2B2828',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: '#000000',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#000000',
        },
      },
    },
  },
});

// Make the theme responsive
theme = responsiveFontSizes(theme);

export default theme;
