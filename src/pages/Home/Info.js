import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 gap-5">
      <InfoCard
        description="IMAGES"
        title="PER DAY DELIEVERY"
        img={clock}
      ></InfoCard>
      <InfoCard
        description="GRAPHIC DESIGNERS"
        title="WE HAVE"
        img={clock}
      ></InfoCard>
      <InfoCard
        description="PER IMAGE"
        title="STARTS FROM"
        img={clock}
      ></InfoCard>
      <InfoCard
        description="OR LESS DELIVERY TIME"
        title="WE PROVIDE"
        img={clock}
      ></InfoCard>
      <InfoCard
        description="CUSTOMER SUPPORT"
        title="365 DAYS"
        img={clock}
      ></InfoCard>
    </div>
  );
};

export default Info;
