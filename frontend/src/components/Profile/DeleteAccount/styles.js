import styled from 'styled-components';

export const Control = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Delete = styled.button`
  background-color: #f14668;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  padding: 10px;

  &:hover {
    background-color: #f03a5f;
  }
`;
