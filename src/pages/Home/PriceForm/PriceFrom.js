import React from "react";
import twentyfourSeven from "../../../assets/images/24 .7 .png";
import ValidationTextFields from "./ValidationTextFields";

const PriceFrom = () => {
  return (
    <div className="hero  my-14">
      <div className="hero-content flex-col lg:flex-row">
        <img src={twentyfourSeven} className="mr-12" alt="" />
        <div>
          <ValidationTextFields></ValidationTextFields>
        </div>
      </div>
    </div>
  );
};

export default PriceFrom;
