import { BtnCard, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BtnCard>
    {options.map((option, index) => {
      return (
        <Button
          key={index}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      );
    })}
  </BtnCard>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
