import { SectionContainer, Title } from './Notification.styled.js';

export const Notification = ({ message }) => {
  return (
    <SectionContainer>
      <Title>{message}</Title>
    </SectionContainer>
  );
};
