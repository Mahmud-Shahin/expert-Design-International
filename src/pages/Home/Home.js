import React from "react";
import Banner from "./Banner";
import Info from "./Info";

import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import MarqueeSlider from "./MarqueeSlider";
import Faq from "./Faq";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <AboutUs></AboutUs>
      <Faq></Faq>
      <MarqueeSlider></MarqueeSlider>
    </div>
  );
};

export default Home;
