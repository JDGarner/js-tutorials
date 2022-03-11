import React from 'react';

const PostRoundUserFeedback = ({ userScore, round, correctAnswers, incorrectAnswers, onClickNextRound }) => {
  return (
    <div>
      <h1>Round {round} overview</h1>
      <h2>Score: {userScore}/5 </h2>
      <h3>Correct words:</h3>
      {correctAnswers.length === 0
        ? <p>No correct answers. Better luck next time, keep practicing!</p>
        : null
      }
      {correctAnswers.map((correctAnswer) => {
        return (
          <li
            className="correct-words"
            key={correctAnswer.english}>Deutsch: {correctAnswer.deutsch} || English: {correctAnswer.english}
          </li>
        );
      })}
      <h3>Incorrect words:</h3>
      {incorrectAnswers.length === 0
        ? <p>No incorrect answers. Well done Muchacho!</p>
        : null
      }
      {incorrectAnswers.map((incorrectAnswer) => {
        return (
          <li
            className="incorrect-words"
            key={incorrectAnswer.english}>Deutsch: {incorrectAnswer.deutsch} || English: {incorrectAnswer.english}
          </li>
        );
      })}
      <button className="next-round-button" type="button" onClick={onClickNextRound}>Go to next round</button>
    </div>
  );
};

export default PostRoundUserFeedback;
