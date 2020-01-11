import React, { Component, Fragment } from "react";
import { easePolyOut } from "d3-ease";
import NodeGroup from "react-move/NodeGroup";

class MatchesList extends Component {
  state = {
    matcheslist: []
  };

  static getDerivedStateFromProps(props, state) {
    return (state = {
      matcheslist: props.matches
    });
  }
  showMatches = () => {
    return this.state.matcheslist ? (
      <NodeGroup
        data={this.state.matcheslist}
        keyAccessor={d => d.id}
        start={() => ({
          opacity: 0,
          x: -200
        })}
        enter={(d, i) => ({
          opacity: [1],
          x: [0],
          timing: {
            duration: 500,
            delay: i * 45,
            ease: easePolyOut
          }
        })}
        update={(d, i) => ({
          opacity: [1],
          x: [0],
          timing: {
            duration: 500,
            delay: i * 45,
            ease: easePolyOut
          }
        })}
        leave={(d, i) => ({
          opacity: [0],
          x: [-200],
          timing: {
            duration: 500,
            delay: i * 45,
            ease: easePolyOut
          }
        })}
      >
        {nodes => (
          <div className="the-matches__lists">
            {nodes.map(({ key, data, state: { x, opacity } }) => (
              <div
                className="match-item"
                key={key}
                style={{
                  opacity,
                  transform: `translate(${x}px)`,
                  display: "flex"
                }}
              >
                <div className="match-item__teams" style={{ display: "flex" }}>
                  <div className="team">
                    <div
                      className="team__logo"
                      style={{
                        width: "80px"
                      }}
                    >
                      <img
                        src={`/images/team_icons/${data.localThmb}.png`}
                        alt="team logo"
                      />
                    </div>
                    <div className="team__name">{data.local}</div>
                    <div className="team__result">{data.resultLocal}</div>
                  </div>

                  <div className="team">
                    <div
                      className="team__logo"
                      style={{
                        width: "80px"
                      }}
                    >
                      <img
                        src={`/images/team_icons/${data.awayThmb}.png`}
                        alt="team logo"
                      />
                    </div>
                    <div className="team__name">{data.away}</div>
                    <div className="team__result">{data.resulAway}</div>
                  </div>
                </div>
                <div className="match-item__info">
                  <div className="match-info">
                    <strong>Date : </strong>
                    {data.date}
                  </div>
                  <div className="match-info">
                    <strong>Stadium : </strong>
                    {data.stadium}
                  </div>
                  <div className="match-info">
                    <strong>Referee : </strong>
                    {data.referee}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </NodeGroup>
    ) : null;
  };

  render() {
    return <Fragment>{this.showMatches()}</Fragment>;
  }
}
export default MatchesList;
