import React, { Fragment } from "react";

const MatchesBlock = ({ match }) => {
  console.log(match);
  return (
    <Fragment>
      <div className="match-date">
        {match.final ? match.date : `Match not played yet:${match.date}`}
      </div>
      <div className="match-wrapper">
        <div className="match-top">
          <div className="match-top__left">
            <div className="club-icon">
              <img src={`/images/team_icons/${match.localThmb}.png`} />
            </div>
            <div className="team-name">{match.local}</div>
          </div>
          <div className="match-top__right">
            {match.final ? match.resultLocal : "-"}
          </div>
        </div>

        <div className="match-bottom">
          <div className="match-bottom__left">
            <div className="club-icon">
              <img src={`/images/team_icons/${match.awayThmb}.png`} />
            </div>
            <div className="team-name">{match.away}</div>
          </div>
          <div className="match-bottom__right">
            {match.final ? match.resultAway : "-"}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MatchesBlock;
