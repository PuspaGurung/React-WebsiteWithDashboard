import React from "react";
import PromotionAnimation from "./Animation";

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
      </div>
    </section>
  );
};

export default Promotion;
