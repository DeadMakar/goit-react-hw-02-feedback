import { OptionsContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <Button key={option} name={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </OptionsContainer>
  );
};
