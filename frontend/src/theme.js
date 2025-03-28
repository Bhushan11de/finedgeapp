import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d09c', // Groww का हरा रंग
      contrastText: '#000',
    },
    secondary: {
      main: '#2a2f36', // कार्ड बैकग्राउंड
    },
    background: {
      default: '#1e2228', // मुख्य बैकग्राउंड
      paper: '#2a2f36',   // कार्ड/पेपर बैकग्राउंड
    },
    text: {
      primary: '#ffffff', // मुख्य टेक्स्ट
      secondary: '#b2b2b2' // सेकेंडरी टेक्स्ट
    },
    error: {
      main: '#ff4d4d' // एरर रंग
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500
    },
    button: {
      textTransform: 'none' // बटन टेक्स्ट uppercase नहीं होगा
    }
  },
  shape: {
    borderRadius: 8 // डिफॉल्ट बॉर्डर रेडियस
  }
});

export default theme;
