import React, { useState } from 'react';
import { wordData } from './data';
import { getRandomIndex } from './utils';
import PostRoundUserFeedback from './PostRoundUserFeedback';
import Round from './Round';
import { useInterval } from './useInterval';
import './style.css';

const TIME_PER_QUESTION = 15;

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
  const [countdownTime, setCountdownTime] = useState(TIME_PER_QUESTION);
  const [didRunOutOfTime, setDidRunOutOfTime] = useState(false);
  const [wordsUsedPerRound, setWordsUsedPerRound] = useState([wordData[wordIndex]]);
  const shouldWeFreezeTimer = isUserAnswerCorrect || incorrectUserAnswerAttempts > 2;

  useInterval(() => {
    if (!shouldWeFreezeTimer) {
      const newCountdownTime = countdownTime - 1;

      if (newCountdownTime === 0) {
        setDidRunOutOfTime(true);
      }

      if (newCountdownTime >= 0) {
        setCountdownTime(newCountdownTime);
        console.log(countdownTime);
      }
    }
  }, 1000);

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

  const isWordAlreadyUsedInSameRound = (newWordIndex) => {
    return wordsUsedPerRound.some((wordObject) => {
      if (wordObject.deutsch === wordData[newWordIndex].deutsch) {
        return true;
      }

      return false;
    });
  };

  const getRandomIndexNotUsedBefore = () => {
    let newWordIndex = null;

    do {
      newWordIndex = getRandomIndex(wordData);
    } while (isWordAlreadyUsedInSameRound(newWordIndex));

    return newWordIndex;
  };

  const onSetupNewWord = () => {
    const newWordIndex = getRandomIndexNotUsedBefore();
    const newWordNumber = wordNumber + 1;

    const newWordUsedPerRound = [
      ...wordsUsedPerRound,
      wordData[newWordIndex],
    ];

    setWordsUsedPerRound(newWordUsedPerRound);

    if (wordNumber > 4) {
      setIsShowingPostRoundFeedback(true);
      setWordsUsedPerRound([wordData[newWordIndex]]);
    } else {
      setWordNumber(newWordNumber);
    }

    setWordIndex(newWordIndex);
    setUserAnswer('');
    setShowCorrectAnswer(false);
    setHasSubmittedUserAnswer(false);
    setDidRunOutOfTime(false);
    setIsUserAnswerCorrect(false);
    setIncorrectUserAnswerAttempts(0);
    setCountdownTime(TIME_PER_QUESTION);
  };

  const onClickSkip = () => {
    addWordToIncorrectAnswers();
    onSetupNewWord();
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
    setCountdownTime(TIME_PER_QUESTION);
    setDidRunOutOfTime(false);
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
            didRunOutOfTime={didRunOutOfTime}
            hasSubmittedUserAnswer={hasSubmittedUserAnswer}
            isUserAnswerCorrect={isUserAnswerCorrect}
            setUserScore={setUserScore}
            shouldHideSubmitAndSkipButtons={shouldHideSubmitAndSkipButtons}
            onChangeUserAnswer={onChangeUserAnswer}
            incorrectUserAnswerAttempts={incorrectUserAnswerAttempts}
            onClickCheckUserAnswer={onClickCheckUserAnswer}
            onClickSkip={onClickSkip}
            onSetupNewWord={onSetupNewWord}
            onClickShowAnswer={onClickShowAnswer}
            countdownTime={countdownTime}
            shouldWeFreezeTimer={shouldWeFreezeTimer} />
        )
      }
    </div>
  );
};

export default PartThirtyFour;
