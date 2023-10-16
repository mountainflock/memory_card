import { shuffle } from "lodash";
import "../styles/card.css";

const Card = ({
  card: { id, name },
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
  const mixCards = () => {
    const cardsMixed = shuffle(cards);
    setCards(cardsMixed);
  };

  const saveCardSelected = () => {
    setCardsSelected([...cardsSelected, id]);
  };

  const calculateScore = () => {
    if (cardsSelected.includes(id)) {
      setScore(0);
      setCardsSelected([]);
    } else {
      setScore(score + 1);
    }
    setCurrentScore(score);
    setBestScore(score);
  };

  const calculateBestScore = () => {
    if (currentScore >= bestScore) setBestScore(currentScore);
  };

  const onCardClick = () => {
    mixCards();
    saveCardSelected();
    calculateScore();
    calculateBestScore();
  };

  return (
    <div className="card" onClick={onCardClick}>
      <img
        className="image"
        src={`https://robohash.org/${id}?set=set4&size=200x200`}
      />
      <h1 className="card-name">{name}</h1>
    </div>
  );
};

export default Card;
