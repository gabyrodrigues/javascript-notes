import React from 'react';

import Header from '../../../components/Header';
import LoginForm from '../../../components/Auth/LoginForm';
import Container from '../../../components/Container';
import Section from '../../../components/Section';

import CardForm from '../../../components/Auth/CardForm';

const Login = () => {
    return (
        <>
            <Header />
            <Section>
                <Container>
                    <CardForm>
                        <LoginForm />
                    </CardForm>
                </Container>
            </Section>
        </>
    );
}

export default Login;