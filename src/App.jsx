import { useState, useEffect } from "react";

import "./App.css";
import Gameboard from "./components/gameboard";

function App() {
  const [cards, setCards] = useState([]);
  const [cardsSelected, setCardsSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((cards) => setCards(cards));
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Memory Game</h1>
      <div className="game">
        <Gameboard
          cards={cards}
          setCards={setCards}
          score={score}
          setScore={setScore}
          cardsSelected={cardsSelected}
          setCardsSelected={setCardsSelected}
          bestScore={bestScore}
          setBestScore={setBestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
      </div>
    </div>
  );
}

export default App;
