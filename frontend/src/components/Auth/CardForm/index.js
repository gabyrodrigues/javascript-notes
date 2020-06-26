import React from 'react';

import * as S from './styles';

import logo from '../../../assets/images/logo.png';

const CardForm = ({ children }) => {
    return (
        <S.Card>
            <S.Content>
                <S.ImgContainer>
                    <S.Img src={logo} />
                </S.ImgContainer>

                <S.Description>
                    Your notes on the cloud
                </S.Description>

                { children }
            </S.Content>
        </S.Card>
    );
}

export default CardForm;