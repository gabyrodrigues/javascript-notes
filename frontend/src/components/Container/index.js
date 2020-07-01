import React from 'react';

import * as S from './styles';

const Container = ({ children, ...rest }) => {
    return (
        <S.Container {...rest}>
            {children}
        </S.Container>
    );
}

export default Container;