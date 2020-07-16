import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${props => props.white ? "#fff" : "#694ed8"};
  border-radius: 5px;
  color: ${props => props.white ? "#fff" : "#694ed8"};
  font-size: 14px;
  padding: 10px;
  text-transform: capitalize;

  &:hover {
    background-color: ${props => props.white ? "#fff" : "#694ed8"};
    color: ${props => props.white ? "#694ed8" : "#fff"};
  }
`;
