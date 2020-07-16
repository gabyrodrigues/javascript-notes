import styled from 'styled-components';

export const Form = styled.form`
  display: block;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    border-radius: 5px;
    color: #694ed8;
    font-size: 16px;
    padding: 10px;
    text-decoration: none;

    &:hover {
      background-color: #f9f9f9;
    }
  }
`;

export const Help = styled.p`
  color: #f14668;
  font-size: 14px;
  margin-top: 10px;
`;
