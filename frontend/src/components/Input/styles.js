import styled from 'styled-components';

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  color: #363636;
  font-size: ${ props => `${props.fontSize}px`};
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 2px solid #ebebeb;
  border-radius: 5px;
  padding: 10px 15px;
`;
