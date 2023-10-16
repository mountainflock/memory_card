import "../styles/gameboard.css";

import Card from "./card";
import ScoreBoard from "./scoreboard";

const Gameboard = ({
  cards,
  setCards,
  cardsSelected,
  setCardsSelected,
  score,
  setScore,
  bestScore,
  setBestScore,
  currentScore,
  setCurrentScore,
}) => {
  return (
    <>
      <div className="scoreboard">
        <ScoreBoard
          score={score}
          bestScore={bestScore}
          currentScore={currentScore}
          cards={cards}
          setBestScore={setBestScore}
        />
      </div>
      <div className="gameboard">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card.id}
              cards={cards}
              setCards={setCards}
              cardsSelected={cardsSelected}
              setCardsSelected={setCardsSelected}
              score={score}
              setScore={setScore}
              bestScore={bestScore}
              setBestScore={setBestScore}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
            />
          );
        })}
      </div>
    </>
  );
};

export default Gameboard;
