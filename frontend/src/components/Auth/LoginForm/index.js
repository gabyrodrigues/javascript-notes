import React from 'react';
import { Link } from 'react-router-dom';

import { Actions, Button, Field, Form, Input, Label  } from './styles';

const LoginForm = () => {
    return (
        <Form>
            <Field>
                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" required="required" />
            </Field>

            <Field>
                <Label htmlFor="password">Password:</Label>
                <Input type="password" id="password" name="password" required="required" />
            </Field>

            <Actions>
                <Link to="/register">Register or</Link>
                <Button type="submit">Login</Button>
            </Actions>
        </Form>
    );
}

export default LoginForm;