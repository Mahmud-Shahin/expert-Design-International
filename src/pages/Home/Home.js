import React from "react";
import Banner from "./Banner";
import Info from "./Info";

import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
    </div>
  );
};

export default Home;
