import { Component } from 'react';
import { Message } from 'components/Message/Message';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Container, Heading } from 'components/App/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    positivePercentage = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(positivePercentage) || 0;
  };

  render() {
    return (
      <Container>
        <Heading>Cafe Expresso Feedback</Heading>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
            />
          </Section>
        ) : (
          <Message />
        )}
      </Container>
    );
  }
}
export default App;
