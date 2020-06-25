import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Actions, Button, Field, Form, Help, Input, Label  } from './styles';

import UsersService from '../../../services/users';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const history = useHistory();

    const HandleSubmit = async (e) => {
        e.preventDefault();

        try {
            UsersService.register({ name: name, email: email, password: password });
            history.push('/login');
        } catch (error) {
            setError(true);
        }
    }

    return (
        <Form onSubmit={HandleSubmit}>
            <Field>
                <Label htmlFor="name">Name:</Label>
                <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required="required"
                    value={name} 
                    onChange={ e => setName(e.target.value) }
                />
            </Field>

            <Field>
                <Label htmlFor="email">Email:</Label>
                <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required="required" 
                    value={email}
                    onChange={ e => setEmail(e.target.value) }
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
                    onChange={ e => setPassword(e.target.value) }
                />
            </Field>

            <Actions>
                <Link to="/login">Login or</Link>
                <Button type="submit">Register</Button>
            </Actions>

            { error && <Help color="danger">Email or Password invalid</Help> }
        </Form>
    );
}

export default RegisterForm;