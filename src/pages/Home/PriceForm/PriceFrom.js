import React from "react";
import twentyfourSeven from "../../../assets/images/24 .7 .png";

import ContactUsForm from "../../ContactUS/ContactUsForm/ContactUsForm";

const PriceFrom = () => {
  return (
    <div className="hero  my-14">
      <div className="hero-content flex-col lg:flex-row">
        <img src={twentyfourSeven} className="mr-12" alt="" />
        <div>
          <ContactUsForm></ContactUsForm>
        </div>
      </div>
    </div>
  );
};

export default PriceFrom;
