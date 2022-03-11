import React from 'react';

const UserFeedback = ({
  isUserAnswerCorrect,
  didRunOutOfTime,
  onSetupNewWord,
  incorrectUserAnswerAttempts,
  onClickShowAnswer,
  showCorrectAnswer,
}) => {
  const renderFeedbackText = () => {
    if (isUserAnswerCorrect) {
      return <h4 className="feedback-messages">Well done!</h4>;
    }

    if (didRunOutOfTime) {
      return <h4 className="feedback-messages">You ran out of time :(</h4>;
    }

    if (incorrectUserAnswerAttempts <= 2) {
      return <h4 className="feedback-messages">Uh-oh, wrong translation, try again.</h4>;
    }

    return null;
  };

  return (
    <div>
      {!showCorrectAnswer ? renderFeedbackText() : null}
      {(incorrectUserAnswerAttempts > 2 || didRunOutOfTime) && !showCorrectAnswer
        ? <button className="show-answer-button" type="button" onClick={onClickShowAnswer}>Show answer</button>
        : null
      }
      {isUserAnswerCorrect || showCorrectAnswer
        ? <button className="next-round-button" type="button" onClick={onSetupNewWord}>Next word</button>
        : null
      }

    </div>

  );
};

export default UserFeedback;
