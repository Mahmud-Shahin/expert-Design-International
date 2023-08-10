import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUpPage = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div
        style={{
          color: "black",
        }}
      >
        <h1>
          {counterOn && <CountUp start={0} end={5000} duration={2} delay={0} />}
        </h1>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;
