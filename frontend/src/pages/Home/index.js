import React from 'react';
import { Link } from 'react-router-dom';

import PresentationImage from '../../assets/images/presentation.png';

import { Column, Container, Img, Section, Subtitle, Title } from './styles';

const Home = () => {
    return (
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
                    <Img src={PresentationImage} alt="Javascript Notes" />
                </Column>
            </Container>
        </Section>
    );
}

export default Home;