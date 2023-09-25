import React, { useEffect, useState } from "react";
import Price from "./Price/Price";
import PriceFrom from "../Home/PriceForm/PriceFrom";
import AOS from "aos";
import "aos/dist/aos.css";

const Prices = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="max-w-7xl mx-auto"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div>
        <div className="main-text">
          <h1 className="text-2xl my-8">
            Affordable and Budget Friendly Prices for Photo Editing
          </h1>
          <span>
            To give you an idea of our prices we have enclosed here a standard
            price list which is changeable according to the complexity of
            images. Normally the price depends on the time it takes to complete
            an image and we always try to give the best price to our customers.
            Without any doubt we can assure you that our price is competitive
            and to serve you according to your budget we are always open for
            negotiation. To get the exact price please click on “Get Quote”
            button and submit the form including the instructions and images
            from each category.
          </span>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-5   ">
          {prices.map((price) => (
            <Price key={price.id} price={price}></Price>
          ))}
        </div>
      </div>
      <PriceFrom></PriceFrom>
    </div>
  );
};

export default Prices;
