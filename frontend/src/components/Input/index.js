import React from 'react';

import * as S from './styles';

const Input = ({ props, ...rest }) => {
    return (
        <S.Field>
            <S.Label htmlFor={props.htmlFor} fontSize={props.fontSize}>{props.label}</S.Label>
            <S.Input 
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange()}
                {...rest}
            />
        </S.Field>
    );
}

export default Input;