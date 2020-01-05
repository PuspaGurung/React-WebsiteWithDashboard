import React, { memo } from "react";
import Featured from "./featured";
import Matches from "./matches";
import MeetPlayers from "./meetPlayers";

const Home = () => {
  return (
    <main>
      <Featured />
      <Matches />
      <MeetPlayers />
    </main>
  );
};

export default Home;
