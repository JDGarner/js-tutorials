import React, { useState } from 'react';
import { wordData } from './data';
import UserFeedback from './UserFeedback';

const PartThirtyFour = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isUserAnswerCorrect, setIsUserAnswerCorrect] = useState(false);
  const [hasSubmittedUserAnswer, setHasSubmittedUserAnswer] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [incorrectUserAnswerAttempts, setIncorrectUserAnswerAttempts] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const onChangeUserAnswer = (event) => {
    setUserAnswer(event.target.value);
  };

  const onClickCheckUserAnswer = () => {
    setHasSubmittedUserAnswer(true);
    if (userAnswer.toLowerCase() === wordData[wordIndex].english.toLowerCase()) {
      setIsUserAnswerCorrect(true);
    } else {
      setIsUserAnswerCorrect(false);
      const newIncorrectUserAnswerAttempt = incorrectUserAnswerAttempts + 1;

      setIncorrectUserAnswerAttempts(newIncorrectUserAnswerAttempt);
    }
  };

  const onClickChangeWordIndex = () => {
    const newWordIndex = Math.floor(Math.random() * wordData.length);

    setWordIndex(newWordIndex);
    setUserAnswer('');
    setHasSubmittedUserAnswer(false);
  };

  const onClickShowAnswer = () => {
    setShowCorrectAnswer(true);
  };

  return (
    <div>
      <h1>Become a Master in German!</h1>
      <h3>German word:</h3>
      {wordData[wordIndex].deutsch.toUpperCase()}
      <div>
        <h3>English translation:</h3>
        <input type="text" onChange={onChangeUserAnswer} value={userAnswer} />
        <button type="button" onClick={onClickCheckUserAnswer}>Submit</button>
        <button type="button" onClick={onClickChangeWordIndex}>Skip</button>

        {showCorrectAnswer
          ? <h4>Answer: {wordData[wordIndex].english}</h4>
          : null
        }

        {hasSubmittedUserAnswer ? (
          <UserFeedback
            isUserAnswerCorrect={isUserAnswerCorrect}
            onClickChangeWordIndex={onClickChangeWordIndex}
            incorrectUserAnswerAttempts={incorrectUserAnswerAttempts}
            onClickShowAnswer={onClickShowAnswer}
            showCorrectAnswer={showCorrectAnswer} />
        )
          : null
        }
      </div>
    </div>
  );
};

export default PartThirtyFour;

// Potential future tasks:
// - Capitalise the German word before displaying it
// - Add a skip/show answer button
// - Keep track of score
