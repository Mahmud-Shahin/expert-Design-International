import React from "react";
import BeforeAfterSlider from "../../../BeforeAfterSlider/BeforeAfterSlider";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        {/* <img src={img} alt="" /> */}
        <BeforeAfterSlider></BeforeAfterSlider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
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
