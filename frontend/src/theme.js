import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d09c',
      contrastText: '#fff'
    },
    background: {
      default: '#1e2228',
      paper: '#2a2f36'
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd'
    }
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#00d09c'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 16px'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }
      }
    }
  }
});
