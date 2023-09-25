import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="bg-base-200"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="main-text">
        <h1 className="text-2xl my-8">Best Image Editing Services</h1>
        <span>
          Photographers, e-commerce enterprises, design studios, advertising
          agencies, and individuals who wish to colorize their environment with
          the touch of graphics or Photoshop can benefit from our expert picture
          editing services. To ensure that our customers receive the highest
          quality and error-free work, we implemented a three-step quality
          control method that demonstrates our professionalism as the best
          clipping path service provider.
        </span>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-5   ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
