import React from 'react';
import { wordData } from './data';
import UserFeedback from './UserFeedback';

const Round = ({
  round,
  userScore,
  wordIndex,
  userAnswer,
  showCorrectAnswer,
  hasSubmittedUserAnswer,
  isUserAnswerCorrect,
  incorrectUserAnswerAttempts,
  setUserScore,
  shouldHideSubmitAndSkipButtons,
  onChangeUserAnswer,
  onClickCheckUserAnswer,
  onClickSkip,
  onClickChangeWordIndex,
  onClickShowAnswer,
}) => {
  return (
    <>
      <h1>Become a Master in German!</h1>
      <h2>Round: {round}</h2>
      <h2>Score: {userScore} </h2>
      <h3>German word:</h3>
      {wordData[wordIndex].deutsch.toUpperCase()}
      <h3>English translation:</h3>
      <input type="text" onChange={onChangeUserAnswer} value={userAnswer} />
      {shouldHideSubmitAndSkipButtons()
        ? null
        : (
          <>
            <button type="button" onClick={onClickCheckUserAnswer}>Submit</button>
            <button type="button" onClick={onClickSkip}>Skip</button>
          </>
        )
        }

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
          showCorrectAnswer={showCorrectAnswer}
          userScore={userScore}
          setUserScore={setUserScore} />
      )
        : null
      }
    </>
  );
};

export default Round;
