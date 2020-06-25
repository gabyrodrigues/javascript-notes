import React from 'react';
import { Link } from 'react-router-dom';

import presentationImage from '../../assets/images/presentation.png';

import Header from '../../components/Header';
import { Column, Container, Img, Section, Subtitle, Title } from './styles';

const Home = () => {
    return (
        <>
            <Header />
            <Section>
                <Container>
                    <Column>
                        <Title>
                            Create notes easily and access when you wants on the cloud
                        </Title>
                        <Subtitle>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                        </Subtitle>
                        <Link to="/register">
                            Register for free now
                        </Link>
                    </Column>
                    <Column>
                        <Img src={presentationImage} alt="Javascript Notes" />
                    </Column>
            </Container>
            </Section>
        </>
    );
}

export default Home;