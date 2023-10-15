// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f7fafc',
      // Add more shades as needed
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  
});

export default theme;
