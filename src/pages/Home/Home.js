import React from "react";
import Banner from "./Banner";
import Info from "./Info";

import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import MarqueeSlider from "./MarqueeSlider";
import Faq from "./Faq";
import Reviews from "./Services/Reviews/Reviews";
import Chatbot from "../Shared/Chatbot";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <AboutUs></AboutUs>
      <Faq></Faq>
      <Reviews></Reviews>
      <MarqueeSlider></MarqueeSlider>
      <Chatbot></Chatbot>
    </div>
  );
};

export default Home;
