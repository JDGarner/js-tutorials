import React from 'react';

const PostRoundUserFeedback = ({ userScore, round, correctAnswers, incorrectAnswers, onClickNextRound }) => {
  return (
    <div>
      <h1>Round {round} overview</h1>
      <h2>Score: {userScore}/5 </h2>
      <h3>Correct words:</h3>
      {correctAnswers.map((correctAnswer) => {
        return <li key={correctAnswer.english}>Deutsch: {correctAnswer.deutsch} || English: {correctAnswer.english}</li>;
      })}
      <h3>Incorrect words:</h3>
      {incorrectAnswers.map((incorrectAnswer) => {
        return <li key={incorrectAnswer.english}>Deutsch: {incorrectAnswer.deutsch} || English: {incorrectAnswer.english}</li>;
      })}
      <button type="button" onClick={onClickNextRound}>Go to next round</button>
    </div>
  );
};

export default PostRoundUserFeedback;
