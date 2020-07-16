import React from 'react';

import * as S from './styles';

export const Button = ({ children, ...rest }) => {
  return (
    <S.Button {...rest}>
      {children}
    </S.Button>
  );
}
