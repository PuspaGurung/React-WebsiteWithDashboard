import React from "react";
import { Tag } from "../../ui/misc";
import Blocks from "./Blocks";

const MatchesHome = () => {
  return (
    <section className="home-matches">
      <div className="container">
        <Tag
          background="#0e1731"
          size="5rem"
          color="#ffffff"
          add={{
            padding: "0 2rem"
          }}
        >
          Matches
        </Tag>
        <Blocks />
        <Tag
          color="#0e1731"
          background="#ffffff"
          size="2.2rem"
          link={true}
          linkTo="/the_team"
          className="link-more-matches"
        >
          See more matches
        </Tag>
      </div>
    </section>
  );
};

export default MatchesHome;
