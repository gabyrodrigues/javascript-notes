import React from 'react';

import Header from '../../../components/Header';
import LoginForm from '../../../components/Auth/LoginForm';

import { Card, Container, Content, Description, Img, ImgContainer, Section } from './styles';

import logo from '../../../assets/images/logo.png';

const Login = () => {
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

                            <LoginForm />
                        </Content>
                    </Card>
                </Container>
            </Section>
        </>
    );
}

export default Login;