import React from 'react';

import * as S from './styles';

const Section = ({ children, ...rest }) => {
  return (
    <S.Section {...rest}>
      {children}
    </S.Section>
  );
}

export default Section;
