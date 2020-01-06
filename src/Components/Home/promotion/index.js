import React from "react";
import PromotionAnimation from "./Animation";
import Enroll from "./Enroll";

const Promotion = () => {
  return (
    <section
      className="promotion"
      style={{
        background: "#fff"
      }}
    >
      <div className="container">
        <PromotionAnimation />
        <Enroll />
      </div>
    </section>
  );
};

export default Promotion;
