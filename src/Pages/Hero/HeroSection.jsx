import React, { Fragment } from "react";
import Box from '@mui/material/Box';

const HeroSection = () => {
  const backgroundImageUrl = '/Images/AstoriaHero.png';

  return (
    <Fragment>
      <Box
        sx={{
          height: '93vh',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        
    

      </Box>
    </Fragment>
  );
};

export default HeroSection;
