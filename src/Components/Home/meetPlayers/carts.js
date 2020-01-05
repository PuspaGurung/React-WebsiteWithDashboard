import React, { Component, Fragment } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Otamd from "./../../../Resources/images/players/Otamendi.png";
import PlayerCards from "./../../ui/playerCards";

class HomeCards extends Component {
  state = {
    cards: [
      {
        bottom: 90,
        left: 300
      },
      {
        bottom: 60,
        left: 200
      },
      {
        bottom: 30,
        left: 100
      },
      {
        bottom: "",
        left: 0,
        bottom: 0
      }
    ]
  };
  showAnimateCards = () => {
    return this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{
          left: 0,
          bottom: 0
        }}
        enter={{
          left: [card.left],
          timing: { duration: 500, ease: easePolyOut },
          bottom: [card.bottom]
        }}
      >
        {({ left, bottom }) => {
          return (
            <div
              className="meetplayer-cards__item playercard-item"
              style={{
                position: "absolute",
                left,
                bottom
              }}
            >
              <PlayerCards
                background={Otamd}
                number="30"
                name="Nicolas"
                lastname="Otamendi"
              />
            </div>
          );
        }}
      </Animate>
    ));
  };

  render() {
    return <Fragment>{this.showAnimateCards()}</Fragment>;
  }
}
export default HomeCards;
