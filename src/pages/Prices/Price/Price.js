import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Price = ({ price }) => {
  const {
    name,

    imgOne,
    imgtwo,
    pricename,
    priceammount,
    priceimg,
    text1,
    text2,
    text3,
    text4,
    text5,
  } = price;
  return (
    <div className="card bg-base-100 shadow-xl mb-7">
      <figure>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={imgOne} alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={imgtwo} alt="Image two" />}
        />
      </figure>
      <div className="card-body">
        <h1 className=" text-3xl text-center">{name}</h1>
        <p className=" text-center text-xl ">{pricename}</p>
        <p className="text-center text-3xl ">{priceammount}</p>
        <p className=" text-center text-xl ">{priceimg}</p>
        <div className=" py-5 text-cyan-700 ">
          <li>
            <a href="/">{text1} </a>
          </li>

          <li>
            <a href="/">{text2} </a>
          </li>

          <li>
            <a href="/"> {text3}</a>
          </li>

          <li>
            <a href="/"> {text4} </a>
          </li>

          <li>
            <a href="/"> {text5}</a>
          </li>
        </div>
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

export default Price;
