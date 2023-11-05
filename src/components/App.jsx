import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackSection } from './FeedbackSection/FeedbackSection';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedbacks() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedbacks();
    const positivePercentage = total ? ((good / total) * 100).toFixed(2) : 0;
    return positivePercentage;
  }

  onLeaveFeedback = evt => {
    const { name } = evt.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1, showStatistics: true };
    });
  };

  render() {
    const { good, neutral, bad, showStatistics } = this.state;

    return (
      <>
        <FeedbackSection
          total={this.countTotalFeedbacks()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {!showStatistics ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedbacks()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
        <GlobalStyle />
      </>
    );
  }
}
