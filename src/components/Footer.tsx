import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import '../styles/fonts.css'

const Footer: React.FC = () => {
  return (
    <Box 
      id="footer" 
      sx={{ 
        background: 'linear-gradient(to right, #2b6cb0, #2c5282)', 
        color: '#fff', 
        py: 3,
        textAlign: 'center',
        fontSize: '1.1rem',
        fontWeight: 'bold',
      }}
    >
      Dashboard Ecuador© {new Date().getFullYear()} Cristhian Barragan. <br /> 
      Todos los derechos reservados.
    </Box>
  );
};

export default Footer;