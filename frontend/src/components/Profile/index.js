import React from 'react';
import * as S from './styles';

import Section from '../../components/Section';

import UpdatePassword from './UpdatePassword';
import UpdateProfile from './UpdateProfile';

import DeleteAccount from './DeleteAccount';

const Profile = () => {
  return (
    <Section white>
      <S.ProfileContainer>
        <S.Block>
          <S.Title>Information</S.Title>
          <S.Card>
            <S.Content>
              <UpdateProfile />
            </S.Content>
          </S.Card>
        </S.Block>

        <S.Block>
          <S.Title>Password</S.Title>
          <S.Card>
            <S.Content>
              <UpdatePassword />
            </S.Content>
          </S.Card>
        </S.Block>

        <S.Block>
          <DeleteAccount />
        </S.Block>
      </S.ProfileContainer>
    </Section>
  );
}

export default Profile;
