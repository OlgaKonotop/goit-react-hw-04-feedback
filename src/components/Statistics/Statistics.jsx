import { StatisticItem, StatisticList } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ total, positiveFeedback, good, bad, neutral }) => {
  return (
    <StatisticList>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {positiveFeedback}%</StatisticItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
//
