import { useState } from 'react';

export function useButtonState() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const handleButtonClick = (propertyName) => {
    setState((prevState) => ({
      ...prevState,
      [propertyName]: prevState[propertyName] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Number(((good / total) * 100).toFixed(0));
  };

  return { state, handleButtonClick, countTotalFeedback, countPositiveFeedbackPercentage };
}