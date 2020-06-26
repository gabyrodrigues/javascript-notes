import React from 'react';

import Header from '../../../components/Header';
import RegisterForm from '../../../components/Auth/RegisterForm';
import Container from '../../../components/Container';

import CardForm from '../../../components/Auth/CardForm';

const Register = () => {
    return (
        <>
            <Header />
            <Container>
                <CardForm>
                    <RegisterForm />
                </CardForm>
            </Container>
        </>
    );
}

export default Register;