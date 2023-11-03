import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { SectionContainer, Title } from './FeedBackSection.styled';

export const FeedbackSection = ({ good, neutral, bad, onLeaveFeedback }) => {
  const feedbacks = Object.keys({ good, neutral, bad });

  return (
    <SectionContainer>
      <Title>Leave feedback</Title>
      <FeedbackOptions options={feedbacks} onLeaveFeedback={onLeaveFeedback} />
    </SectionContainer>
  );
};
