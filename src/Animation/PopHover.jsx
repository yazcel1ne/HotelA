import React from 'react';
import Box from '@mui/material/Box';

const PopHover = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default PopHover;
