import React from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Service = ({ service }) => {
  const { name, description, imgOne, imgtwo, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl mb-7">
      <figure>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={imgOne} alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={imgtwo} alt="Image two" />}
        />
      </figure>
      <div className="card-body">
        <p className="card-title text-orange-400">{price}</p>
        <h1 className="card-title text-2xl">{name}</h1>
        <p>{description}</p>
        <div className="card-actions justify-end space-x-20 py-2">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Get free trial
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Get a quate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
