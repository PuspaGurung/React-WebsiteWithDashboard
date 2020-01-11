import React, { Component } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { firebaseMatches } from "./../../firebase";
import { firebaseLooper, reverseArray } from "./../ui/misc";
import LeagueTable from "./table";
import MatchesList from "./matchesList";

class TheMatches extends Component {
  state = {
    loading: false,
    matches: [],
    filterMatches: [],
    playerFilter: "All",
    resultFilter: "All"
  };
  componentDidMount() {
    firebaseMatches.once("value").then(snapshot => {
      const matches = firebaseLooper(snapshot);

      this.setState({
        loading: false,
        matches: reverseArray(matches),
        filterMatches: reverseArray(matches)
      });
    });
  }

  showPlayed = played => {
    const list = this.state.matches.filter(match => {
      return match.final === played;
    });
    this.setState({
      filterMatches: played === "All" ? this.state.matches : list,
      playerFilter: played,
      resultFilter: "All"
    });
  };

  render() {
    return (
      <main className="main">
        <div className="the-matches-container" style={{ display: "flex" }}>
          <div className="the-matches">
            <div className="the-matches__filter">
              <div className="match-filter-box">
                <h3 className="match-filter__title heading-tertiary">
                  Show matches:
                </h3>
              </div>
              <div className="match-filter-box">
                <h3 className="match-filter__title heading-tertiary">
                  Result game:
                </h3>
                <div className="match-filter__btns">
                  <button onClick={() => this.showPlayed("All")}>All</button>
                  <button onClick={() => this.showPlayed("Yes")}>Played</button>
                  <button onClick={() => this.showPlayed("No")}>
                    Not played
                  </button>
                </div>
              </div>
            </div>
            <MatchesList matches={this.state.filterMatches} />
          </div>
          <div className="league-table">
            <LeagueTable />
          </div>
        </div>
      </main>
    );
  }
}
export default TheMatches;
