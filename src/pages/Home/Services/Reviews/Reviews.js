import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="main-text">
        <h1 className="text-2xl my-8">What Our Client Says</h1>
        <span>
          We, the team who believe in quality service and our quality services
          create a natural slime in the face of every customers with utmost
          satisfaction.
        </span>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-5   ">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
