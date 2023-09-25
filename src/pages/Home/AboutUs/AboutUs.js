import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="hero my-14 ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://expertgraphicinternational.com/wp-content/uploads/2023/02/office-expert-graphic.webp"
          alt=""
          className="mr-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
        <div data-aos="fade-left" data-aos-duration="2000">
          <h1 className="text-3xl mb-5">About Expert Graphic International</h1>
          <p className="">
            Are you looking for a Ghost Mannequin Service Provider, graphic
            design or image manipulation business to help you with your
            ecommerce product photographs or other personal projects? If that’s
            the case, let us take this occasion to extend a hearty welcome to
            you. <br /> <br /> Expert Graphic International (EGI) is a one-stop
            shop for top-notch image alteration services. We have over ten years
            of experience in this field and 200 experienced graphic designers
            who are well-versed in the requirements for all types of image
            manipulation or graphics-related work, particularly for customers in
            the United States, Australia, Canada, the United Kingdom, Germany,
            Sweden, and Denmark. We have a corporate office in Lisboa, Portugal,
            and a production studio in Dhaka, Bangladesh, in addition to our
            headquarters in Buffalo, New York,Usa
          </p>
          <button className="btn btn-primary my-8">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
