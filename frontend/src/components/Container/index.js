import React from 'react';

import * as S from './styles';

const Container = ({ children }) => {
    return (
        <S.Section>
            <S.Container>
                {children}
            </S.Container>
        </S.Section>
    );
}

export default Container;