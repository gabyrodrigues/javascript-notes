import React from 'react';
import { Block, Card, ProfileContainer, Content, Title } from './styles';

import Section from '../../components/Section';

import UpdatePassword from './UpdatePassword';
import UpdateProfile from './UpdateProfile';

import DeleteAccount from './DeleteAccount';

const Profile = () => {
  return (
    <Section white>
      <ProfileContainer>
        <Block>
          <Title>Information</Title>
          <Card>
            <Content>
              <UpdateProfile />
            </Content>
          </Card>
        </Block>

        <Block>
          <Title>Password</Title>
          <Card>
            <Content>
              <UpdatePassword />
            </Content>
          </Card>
        </Block>

        <Block>
          <DeleteAccount />
        </Block>
      </ProfileContainer>
    </Section>
  );
}

export default Profile;
