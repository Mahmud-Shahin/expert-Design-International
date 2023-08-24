import React from "react";

const Review = ({ review }) => {
  const { img, name, description } = review;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions ">
          <button className="btn btn-primary">Shahin Mahmud</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
