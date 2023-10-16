import "../styles/scoreboard.css";

const ScoreBoard = ({ score, bestScore, cards, setBestScore }) => {
  if (score === cards.length) {
    setBestScore(cards.length);
    return (
      <div className="score-message">
        <h2>You win!</h2>
      </div>
    );
  } else if (score === 0) {
    return (
      <div className="score-message">
        <h2>Select a card!</h2>
      </div>
    );
  } else {
    return (
      <div className="score">
        <h2>Score: {score}</h2>
        <h2>Best score: {bestScore}</h2>
      </div>
    );
  }
};

export default ScoreBoard;
