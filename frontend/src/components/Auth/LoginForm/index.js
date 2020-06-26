import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Actions, Field, Form, Help, Input, Label  } from './styles';

import { Button } from '../../../components/Button';

import UsersService from '../../../services/users';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const HandleSubmit = async (e) => {
        e.preventDefault();

        try {
            await UsersService.login({ email: email, password: password });
            history.push('/notes');
        } catch (error) {
            setError(true);
        }
    }

    return (
        <Form onSubmit={HandleSubmit}>
            <Field>
                <Label htmlFor="email">Email:</Label>
                <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required="required" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Field>

            <Field>
                <Label htmlFor="password">Password:</Label>
                <Input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required="required" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Field>

            <Actions>
                <Link to="/register">Register or</Link>
                <Button type="submit">Login</Button>
            </Actions>

            { error && <Help color="danger">Email or Password invalid</Help> }
        </Form>
    );
}

export default LoginForm;