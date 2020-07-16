import React from 'react';

import * as S from './styles';

const Input = ({ name, fontSize, id, label, onChange, value, type, ...rest }) => {
  return (
    <S.Field>
      <S.Label htmlFor={name} fontSize={fontSize}>{label}</S.Label>
      <S.Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </S.Field>
  );
}

export default Input;
