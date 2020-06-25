import React from 'react';
import { Link } from 'react-router-dom';

import { Actions, Button, Field, Form, Input, Label  } from './styles';

const RegisterForm = () => {
    return (
        <Form>
            <Field>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" id="name" name="name" required="required" />
            </Field>

            <Field>
                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" required="required" />
            </Field>

            <Field>
                <Label htmlFor="password">Password:</Label>
                <Input type="password" id="password" name="password" required="required" />
            </Field>

            <Actions>
                <Link to="/login">Login or</Link>
                <Button type="submit">Register</Button>
            </Actions>
        </Form>
    );
}

export default RegisterForm;