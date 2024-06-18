import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




const HeroFinder = () => {
  return (
    <Box sx={{ flexGrow: 1,  
        paddingLeft: "198px",
        paddingRight: "198px",
     }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
         Check In
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          Check Out
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroFinder;
