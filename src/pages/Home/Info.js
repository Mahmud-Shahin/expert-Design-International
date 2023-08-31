import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.png";
import iconThree from "../../assets/icons/icon (3).webp";
import iconOne from "../../assets/icons/icon (1).webp";
import iconfour from "../../assets/icons/icon (4).webp";
import iconTwo from "../../assets/icons/icon (2).webp";
import CounterUpPage from "./CounterUpPage";

const Info = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-5 md:grid-cols-2 gap-5 ">
      <InfoCard
        description="IMAGES"
        title="PER DAY DELIEVERY"
        img={iconThree}
        CountDown={<CounterUpPage></CounterUpPage>}
      ></InfoCard>
      <InfoCard
        description="GRAPHIC DESIGNERS"
        title="WE HAVE"
        img={iconOne}
        CountDown={<CounterUpPage></CounterUpPage>}
      ></InfoCard>
      <InfoCard
        description="PER IMAGE"
        title="STARTS FROM"
        img={iconfour}
        CountDown={<CounterUpPage></CounterUpPage>}
      ></InfoCard>
      <InfoCard
        description="OR LESS DELIVERY TIME"
        title="WE PROVIDE"
        img={iconTwo}
        CountDown={<CounterUpPage></CounterUpPage>}
      ></InfoCard>
      <InfoCard
        description="CUSTOMER SUPPORT"
        title="24 / 7 DAYS"
        img={clock}
        CountDown={<CounterUpPage></CounterUpPage>}
      ></InfoCard>
    </div>
  );
};

export default Info;
