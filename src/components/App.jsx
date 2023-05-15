import React from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { useButtonState } from './useButtonState';

export default function App() {
  const { state, handleButtonClick, countTotalFeedback, countPositiveFeedbackPercentage } = useButtonState();
  const { good, neutral, bad } = state;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          title="Please leave feedback"
          options={['good', 'neutral', 'bad']}
          onButtonClick={handleButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
