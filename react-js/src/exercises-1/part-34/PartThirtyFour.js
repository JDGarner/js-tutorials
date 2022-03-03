import React, { useState } from 'react';
import { wordData } from './data';
import { getRandomIndex } from './utils';
import PostRoundUserFeedback from './PostRoundUserFeedback';
import Round from './Round';

// TODO:
// When displaying the question word, just capitalise the first letter
// Also do the same for the words displaying in the post round feedback
// Try look up on google how to do this
// Once that's done, see if you can put that function into the utils.js file so you can use it
// again in any file without having to repeat your logic

// If there are no incorrect answers, add a message
// If there are no correct answers, add a message

// Add a main menu screen, that explains the game and then gives you a button to start to play

// Add a 10 second timer, if the player doesn't answer within 10 seconds then
// display a message - 'You ran out of time', and show the Next Word button

const PartThirtyFour = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isUserAnswerCorrect, setIsUserAnswerCorrect] = useState(false);
  const [hasSubmittedUserAnswer, setHasSubmittedUserAnswer] = useState(false);
  const [wordIndex, setWordIndex] = useState(getRandomIndex(wordData));
  const [incorrectUserAnswerAttempts, setIncorrectUserAnswerAttempts] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [round, setRound] = useState(1);
  const [wordNumber, setWordNumber] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [isShowingPostRoundFeedback, setIsShowingPostRoundFeedback] = useState(false);

  const onChangeUserAnswer = (event) => {
    setUserAnswer(event.target.value);
  };

  const onClickCheckUserAnswer = () => {
    setHasSubmittedUserAnswer(true);
    if (userAnswer.toLowerCase() === wordData[wordIndex].english.toLowerCase()) {
      setIsUserAnswerCorrect(true);

      const newUserScore = userScore + 1;
      const newCorrectAnswers = [
        ...correctAnswers,
        wordData[wordIndex],
      ];

      setCorrectAnswers(newCorrectAnswers);

      setUserScore(newUserScore);
    } else {
      setIsUserAnswerCorrect(false);
      const newIncorrectUserAnswerAttempt = incorrectUserAnswerAttempts + 1;

      setIncorrectUserAnswerAttempts(newIncorrectUserAnswerAttempt);
    }
  };

  const addWordToIncorrectAnswers = () => {
    const newIncorrectAnswers = [
      ...incorrectAnswers,
      wordData[wordIndex],
    ];
    setIncorrectAnswers(newIncorrectAnswers);
  };

  const onClickChangeWordIndex = () => {
    const newWordIndex = getRandomIndex(wordData);
    const newWordNumber = wordNumber + 1;

    if (wordNumber > 4) {
      setIsShowingPostRoundFeedback(true);
    } else {
      setWordNumber(newWordNumber);
    }

    setWordIndex(newWordIndex);
    setUserAnswer('');
    setShowCorrectAnswer(false);
    setHasSubmittedUserAnswer(false);
    setIncorrectUserAnswerAttempts(0);
  };

  const onClickSkip = () => {
    addWordToIncorrectAnswers();
    onClickChangeWordIndex();
  };

  const onClickShowAnswer = () => {
    setShowCorrectAnswer(true);
    addWordToIncorrectAnswers();
  };

  // If user has submitted AND either they have the correct answer OR they have more than 2
  // incorrect attempts, then hide the buttons
  const shouldHideSubmitAndSkipButtons = () => {
    return hasSubmittedUserAnswer && (isUserAnswerCorrect || incorrectUserAnswerAttempts > 2);
  };

  const onClickNextRound = () => {
    const newRound = round + 1;

    setRound(newRound);
    setIsShowingPostRoundFeedback(false);
    setWordNumber(1);
    setUserScore(0);
    setIncorrectAnswers([]);
    setCorrectAnswers([]);
  };

  return (
    <div>
      {isShowingPostRoundFeedback
        ? (
          <PostRoundUserFeedback
            userScore={userScore}
            round={round}
            correctAnswers={correctAnswers}
            incorrectAnswers={incorrectAnswers}
            onClickNextRound={onClickNextRound} />
        )
        : (
          <Round
            round={round}
            userScore={userScore}
            wordIndex={wordIndex}
            userAnswer={userAnswer}
            showCorrectAnswer={showCorrectAnswer}
            hasSubmittedUserAnswer={hasSubmittedUserAnswer}
            isUserAnswerCorrect={isUserAnswerCorrect}
            setUserScore={setUserScore}
            shouldHideSubmitAndSkipButtons={shouldHideSubmitAndSkipButtons}
            onChangeUserAnswer={onChangeUserAnswer}
            incorrectUserAnswerAttempts={incorrectUserAnswerAttempts}
            onClickCheckUserAnswer={onClickCheckUserAnswer}
            onClickSkip={onClickSkip}
            onClickChangeWordIndex={onClickChangeWordIndex}
            onClickShowAnswer={onClickShowAnswer} />
        )
      }
    </div>
  );
};

export default PartThirtyFour;
