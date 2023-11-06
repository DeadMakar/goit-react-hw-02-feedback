import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100px;
  display: inline-block;
  margin: auto;
  &:hover {
    background-color: #45a049;
  }
`;
