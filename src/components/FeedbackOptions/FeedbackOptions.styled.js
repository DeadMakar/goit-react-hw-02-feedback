import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #45a049;
  }
`;
