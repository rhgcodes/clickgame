import React, { Component } from "react";

import FadeIn from "../transitions/fade-in";
import CharacterBox from "./characterBox";
import ScoreDisplay from "./scoredisplay";

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const initialChars = [
  {
    name: "Goku",
    img: "img/Goku.png",
    clicked: false
  },
  {
    name: "17",
    img: "img/17.png",
    clicked: false
  },
  {
    name: "18",
    img: "img/18.png",
    clicked: false
  },
  {
    name: "Bulma",
    img: "img/Bulma.png",
    clicked: false
  },
  {
    name: "Cell",
    img: "img/Cell.png",
    clicked: false
  },
  {
    name: "Frieza",
    img: "img/Frieza.png",
    clicked: false
  },
  {
    name: "Gohan",
    img: "img/Gohan.png",
    clicked: false
  },
  {
    name: "Krillin",
    img: "img/Krillin.png",
    clicked: false
  },
  {
    name: "MajinBuu",
    img: "img/MajinBuu.png",
    clicked: false
  },
  {
    name: "Piccolo",
    img: "img/Piccolo.png",
    clicked: false
  },
  {
    name: "Roshi",
    img: "img/Roshi.png",
    clicked: false
  },
  {
    name: "Trunks",
    img: "img/Trunks.png",
    clicked: false
  },
  {
    name: "Vegeta",
    img: "img/Vegeta.png",
    clicked: false
  },
  {
    name: "Chaiotzu",
    img: "img/Chaiotzu.png",
    clicked: false
  },
  {
    name: "Tien",
    img: "img/Tien.png",
    clicked: false
  }
];

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        score: 0
      },
      characters: shuffleArray(initialChars)
    };
  }

  onCharacterClick = index => {
    if (!this.state.characters[index].clicked) {
      this.setState({
        characters: shuffleArray(
          this.state.characters.map((character, current) => {
            return current === index
              ? { ...character, clicked: true }
              : character;
          })
        ),
        user: {
          ...this.state.user,
          score: this.state.user.score + 1
        }
      });
      //and shuffle
    } else {
      this.setState({
        characters: shuffleArray(
          this.state.characters.map(character => {
            return { ...character, clicked: false };
          })
        ),
        user: {
          ...this.state.user,
          score: 0
        }
      });
      //and shuffle
    }
  };

  render() {
    return (
      <div className="Board">
        <FadeIn
          in={true}
          duration={450}
          length={"30px"}
          direction={"bottom"}
          delay={"1s"}
        >
          <h4>
            Try to click on every Dragon Ball character once. Once you click a player
            the grid will shuffle.
            <br />
            Try not to click the same Dragon Ball character twice or the game will start
            all over!
          </h4>
        </FadeIn>
        <FadeIn in={true} duration={500} direction={"bottom"} delay={"1.5s"}>
          <ScoreDisplay score={this.state.user.score} />
        </FadeIn>
        <CharacterBox
          characters={this.state.characters}
          onCharacterClick={this.onCharacterClick}
        />
      </div>
    );
  }
}
