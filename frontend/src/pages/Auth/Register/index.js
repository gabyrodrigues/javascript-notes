import React from 'react';

import Header from '../../../components/Header';
import RegisterForm from '../../../components/Auth/RegisterForm';
import Container from '../../../components/Container';
import Section from '../../../components/Section';

import CardForm from '../../../components/Auth/CardForm';

const Register = () => {
    return (
        <>
            <Header />
            <Section>
                <Container>
                    <CardForm>
                        <RegisterForm />
                    </CardForm>
                </Container>
            </Section>
        </>
    );
}

export default Register;