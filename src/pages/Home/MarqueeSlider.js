import React from "react";
import Marquee from "react-fast-marquee";
import samsung from "../../assets/images/marquee/samsung-logo-egi.webp";
import apple from "../../assets/images/marquee/apple-Logo-egi.webp";
import levis from "../../assets/images/marquee/levis-logo-egi.webp";
import nordstrom from "../../assets/images/marquee/nordstrom-logo-egi.webp";
import addidas from "../../assets/images/marquee/Adidas-Logo_EGI.png";
import sony from "../../assets/images/marquee/sony-logo-egi.webp";

const MarqueeSlider = () => {
  return (
    <div>
      <div className="main-text">
        <h1 className="text-2xl my-8">Whom We Worked For</h1>
        <span>Our Renowned Client’s Portfolio</span>
      </div>
      <div className="my-10">
        <Marquee>
          <div>
            <img src={samsung} alt="" />
          </div>
          <div>
            <img src={apple} alt="" />
          </div>
          <div>
            <img src={levis} alt="" />
          </div>
          <div>
            <img src={nordstrom} alt="" />
          </div>
          <div>
            <img src={addidas} alt="" />
          </div>
          <div>
            <img src={sony} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSlider;
