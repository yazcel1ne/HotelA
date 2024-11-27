import {React, Fragment} from "react";

import HeroSection from "./HeroSection.jsx";
import HeroFinder from "../../Components/HeroFinder.jsx";
import About from "../About/About.jsx";

const HeroWrap = () => {

    return (
        <Fragment>
  
            <HeroSection/>
            <About/>
    
        </Fragment>


    )
};

export default HeroWrap;