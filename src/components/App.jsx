import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.countTotalFeedback();
    if (sum === 0) {
      return 0;
    }
    return ((this.state.good / sum) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const sum = this.countTotalFeedback();
    const positiveFeedback = parseInt(this.countPositiveFeedbackPercentage());
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            title="Please leave feedback"
            options={['good', 'neutral', 'bad']}
            onButtonClick={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {sum > 0 ? (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={sum}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
