import React from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ClippingPathBanner = () => {
  return (
    <div className="hero  my-14  ">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <figure>
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="https://i.ibb.co/h9gLbdG/design-1.jpg"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="https://i.ibb.co/9HTF2n8/design-3.jpg"
                alt="Image two"
              />
            }
          />
        </figure>

        <div className=" mr-5">
          <h1 className="text-3xl font-bold ">
            Cheap Photo Editing Service Provider Especially for E-commerce and
            Product Photos
          </h1>
          <p className="py-6 mb-8">
            Are you looking for a graphic design or image manipulation company
            to help you with your ecommerce product photographs or other
            personal projects? If that’s the case, let us take this occasion to
            extend a hearty welcome to you as we are the best photo editing and
            clipping path Service Company you will find in the market.
          </p>
          <button className=" btn btn-primary">Get a quote</button>
        </div>
      </div>
    </div>
  );
};

export default ClippingPathBanner;
