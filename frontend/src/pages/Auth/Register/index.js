import React from 'react';

import Header from '../../../components/Header';
import RegisterForm from '../../../components/Auth/RegisterForm';

import { Card, Container, Content, Description, Img, ImgContainer, Section } from './styles';

import logo from '../../../assets/images/logo.png';

const Register = () => {
    return (
        <>
            <Header />
            <Section>
                <Container>
                    <Card>
                        <Content>
                            <ImgContainer>
                                <Img src={logo} />
                            </ImgContainer>
                            
                            <Description>
                                Your notes on the cloud
                            </Description>

                            <RegisterForm />
                        </Content>
                    </Card>
                </Container>
            </Section>
        </>
    );
}

export default Register;