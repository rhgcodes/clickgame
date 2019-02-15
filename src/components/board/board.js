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
    img: "img/Goku.PNG",
    clicked: false
  },
  {
    name: "17",
    img: "img/17.png",
    clicked: false
  },
  {
    name: "18",
    img: "img/18.PNG",
    clicked: false
  },
  {
    name: "Bulma",
    img: "img/Bulma.PNG",
    clicked: false
  },
  {
    name: "Cell",
    img: "img/Cell.PNG",
    clicked: false
  },
  {
    name: "Frieza",
    img: "img/Frieza.PNG",
    clicked: false
  },
  {
    name: "Gohan",
    img: "img/Gohan.PNG",
    clicked: false
  },
  {
    name: "Krillin",
    img: "img/Krillin.PNG",
    clicked: false
  },
  {
    name: "MajinBuu",
    img: "img/MajinBuu.PNG",
    clicked: false
  },
  {
    name: "Piccolo",
    img: "img/Piccolo.PNG",
    clicked: false
  },
  {
    name: "Roshi",
    img: "img/Roshi.PNG",
    clicked: false
  },
  {
    name: "Trunks",
    img: "img/Trunks.PNG",
    clicked: false
  },
  {
    name: "Vegeta",
    img: "img/Vegeta.PNG",
    clicked: false
  },
  {
    name: "Chaiotzu",
    img: "img/Chaiotzu.PNG",
    clicked: false
  },
  {
    name: "Tien",
    img: "img/Tien.PNG",
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
            Try to click on every DBZ character once. Once you click a player
            the grid will shuffle.
            <br />
            Try not to click the same NBA Player twice or the game will start
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
