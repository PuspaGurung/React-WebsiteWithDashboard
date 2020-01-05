import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper, reverseArray } from "./../../ui/misc";
import MatchesBlock from "./../../ui/matches_blocks";
class Blocks extends Component {
  state = {
    matches: []
  };
  showMatches = matches =>
    matches
      ? matches.map(match => (
          <div className="matches__item" key={match.id}>
            <MatchesBlock match={match} />
          </div>
        ))
      : null;
  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);
        this.setState({
          matches: reverseArray(matches)
        });
      });
  }
  render() {
    console.log(this.state.matches);
    return (
      <div className="matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}
export default Blocks;
