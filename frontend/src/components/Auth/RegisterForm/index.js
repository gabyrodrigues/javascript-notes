import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as S from './styles';

import Input from '../../../components/Input';

import UsersService from '../../../services/users';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      UsersService.register({ name: name, email: email, password: password });
      history.push('/login');
    } catch (error) {
      setError(true);
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input
        label="Name: "
        fontSize={14}
        htmlFor="name"
        type="text"
        id="name"
        name="name"
        required="required"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Input
        label="Email: "
        fontSize={14}
        htmlFor="email"
        type="email"
        id="email"
        name="email"
        required="required"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Input
        label="Password: "
        fontSize={14}
        htmlFor="password"
        type="password"
        id="password"
        name="password"
        required="required"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <S.Actions>
        <Link to="/login">Login or</Link>
        <S.Button type="submit">Register</S.Button>
      </S.Actions>

      {error && <S.Help color="danger">Email or Password invalid</S.Help>}
    </S.Form>
  );
}

export default RegisterForm;
