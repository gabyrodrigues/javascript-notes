import React from 'react';

import presentationImage from '../../assets/images/presentation.png';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Section from '../../components/Section';


import * as S from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <S.Column>
            <S.Title>
              Create notes easily and access when you wants on the cloud
            </S.Title>
            <S.Subtitle>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
            </S.Subtitle>
            <S.LinkButton to="/register">
              Register for free now
            </S.LinkButton>
          </S.Column>
          <S.Column>
            <S.Img src={presentationImage} alt="Javascript Notes" />
          </S.Column>
        </Container>
      </Section>
    </>
  );
}

export default Home;
