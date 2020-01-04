import React, { memo } from "react";
import Featured from "./featured";
import Matches from "./matches";

const Home = () => {
  return (
    <main>
      <Featured />
      <Matches />
    </main>
  );
};

export default Home;
