import React from "react";
import { Tag } from "../../ui/misc";

const MatchesHome = () => {
  return (
    <div className="home-matches_wrapper">
      <div className="container">
        <Tag
          background="#0e1731"
          size="5rem"
          color="#ffffff"
          add={{
            marginBottom: "2rem"
          }}
        >
          Matcges
        </Tag>
        <Tag
          color="#0e1731"
          background="#ffffff"
          size="2.2rem"
          link={true}
          linkTo="/the_team"
          className="hello"
        >
          See more matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
