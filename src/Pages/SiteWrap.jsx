import { React, Fragment } from "react";
import NavBar from "../Components/NavBar.jsx";
import HeroWrap from "/src/Pages/Hero/HeroWrap.jsx";
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
      <div id="hero-section">
        <HeroWrap />
      </div>
      <div id="penthouse-section">
        <ThePenthouse />
      </div>
      <div id="rooms-section">
        <RoomsAvail />
      </div>
      <div id="amenities-section">
        <AmenitiesAvail />
      </div>
      <div id="reviews-section">
        <Reviews />
      </div>
      <div id="come-stay-section">
        <ComeStay />
      </div>
      <div id="faq-section">
        <FAQ />
      </div>
      <Footer />
    </Fragment>
  );
};

export default SiteWrap;
