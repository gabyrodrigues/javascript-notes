import React from 'react';

import Header from '../../../components/Header';
import LoginForm from '../../../components/Auth/LoginForm';
import Container from '../../../components/Container';

import CardForm from '../../../components/Auth/CardForm';

const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <CardForm>
                    <LoginForm />
                </CardForm>
            </Container>
        </>
    );
}

export default Login;