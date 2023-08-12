import React from "react";
import "./InfoCard.css";

const InfoCard = ({ img, title, description, CountDown }) => {
  return (
    <div className="card  bg-base-100 shadow-xl border-r-4 border-indigo-500 ">
      <figure className="px-10 pt-10 ">
        <img src={img} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>

        <h1 className="card-actions text-xl">{CountDown}</h1>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
