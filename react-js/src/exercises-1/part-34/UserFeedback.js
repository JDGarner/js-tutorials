import React from 'react';

const userFeedback = ({
  isUserAnswerCorrect,
  onClickChangeWordIndex,
  incorrectUserAnswerAttempts,
  onClickShowAnswer,
  showCorrectAnswer,
}) => {
  const renderFeedbackText = () => {
    if (isUserAnswerCorrect) {
      return <h4>Well done!</h4>;
    }

    return <h4>Uh-oh, wrong translation, try again</h4>;
  };

  return (
    <div>
      {!showCorrectAnswer ? renderFeedbackText() : null}
      {incorrectUserAnswerAttempts > 2 && !showCorrectAnswer
        ? <button type="button" onClick={onClickShowAnswer}>Show answer</button>
        : null
      }
      <button type="button" onClick={onClickChangeWordIndex}>Next word</button>
    </div>

  );
};

export default userFeedback;
