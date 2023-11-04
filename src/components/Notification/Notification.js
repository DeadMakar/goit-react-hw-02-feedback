import {
  SectionContainer,
  Title,
} from '../FeedbackSection/FeedBackSection.styled';

export const Notification = ({ message }) => {
  return (
    <SectionContainer>
      <Title>{message}</Title>
    </SectionContainer>
  );
};
