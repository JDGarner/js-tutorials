import React from 'react';
import { wordData } from './data';
import UserFeedback from './UserFeedback';
import { capitaliseFirstLetter } from './utils';

const Round = ({
  round,
  userScore,
  wordIndex,
  userAnswer,
  countdownTime,
  didRunOutOfTime,
  shouldWeFreezeTimer,
  showCorrectAnswer,
  hasSubmittedUserAnswer,
  isUserAnswerCorrect,
  incorrectUserAnswerAttempts,
  setUserScore,
  shouldHideSubmitAndSkipButtons,
  onChangeUserAnswer,
  onClickCheckUserAnswer,
  onClickSkip,
  onSetupNewWord,
  onClickShowAnswer,
}) => {
  const countdownTimeClassName = countdownTime <= 3 ? 'urgent-countdown' : null;

  return (
    <>
      <h1>Become a Master in German!</h1>
      <h2>Round: {round}</h2>
      <h2>Score: {userScore} </h2>
      <h3>German word:</h3>
      {capitaliseFirstLetter(wordData[wordIndex].deutsch)}
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
        ? <h4 className="feedback-messages">Answer: {capitaliseFirstLetter(wordData[wordIndex].english)}</h4>
        : null
        }

      {hasSubmittedUserAnswer || didRunOutOfTime ? (
        <UserFeedback
          isUserAnswerCorrect={isUserAnswerCorrect}
          didRunOutOfTime={didRunOutOfTime}
          onSetupNewWord={onSetupNewWord}
          incorrectUserAnswerAttempts={incorrectUserAnswerAttempts}
          onClickShowAnswer={onClickShowAnswer}
          showCorrectAnswer={showCorrectAnswer}
          userScore={userScore}
          setUserScore={setUserScore} />
      )
        : null
      }

      {countdownTime !== 0 && !shouldWeFreezeTimer
        ? <h4 className={countdownTimeClassName}>Timer: {countdownTime} seconds left</h4>
        : null
      }
    </>
  );
};

export default Round;
