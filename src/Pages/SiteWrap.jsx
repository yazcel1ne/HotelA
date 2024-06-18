import { React, Fragment } from "react";
import NavBar from "../Components/NavBar.jsx";
import HeroWrap from "/src/Pages/Hero/HeroWrap.jsx";
import { Box } from "@mui/material";
import ThePenthouse from "./CTA/ThePenthouse.jsx";
import RoomsAvail from "./Rooms/RoomsAvail.jsx";
import AmenitiesAvail from "./Amenities/AmenitiesAvail.jsx";
import Reviews from "./Review/Reviews.jsx";
import ComeStay from "./CTA/ComeStay.jsx";
import FAQ from "./Faq/FAQ.jsx";
import Footer from "./Footer/Footer.jsx";

const SiteWrap = () => {
  return (
    <Fragment>
      <NavBar />
      <HeroWrap />
      <ThePenthouse />
      <RoomsAvail />
      <AmenitiesAvail />
      <Reviews />
      <ComeStay/>
      <FAQ/>
     <Footer/>
    </Fragment>
  );
};

export default SiteWrap;
