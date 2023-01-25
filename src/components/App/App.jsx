import { useState } from 'react';
import { Message } from 'components/Message/Message';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Container, Heading } from 'components/App/App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good / countTotalFeedback()) * 100;
    return Math.round(positivePercentage) || 0;
  };

  return (
    <Container>
      <Heading>Cafe Expresso Feedback</Heading>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
            good={good}
            bad={bad}
            neutral={neutral}
          />
        </Section>
      ) : (
        <Message />
      )}
    </Container>
  );
}
