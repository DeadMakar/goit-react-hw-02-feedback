import { OptionsContainer, Button, Title } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      <Title>Please leave feedback</Title>
      {options.map(option => (
        <Button key={option} onClick={onLeaveFeedback} name={option}>
          {option}
        </Button>
      ))}
    </OptionsContainer>
  );
};
