import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as S from './styles';

import { Button } from '../../../components/Button';
import Input from '../../../components/Input';

import UsersService from '../../../services/users';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await UsersService.login({ email: email, password: password });
      history.push('/notes');
    } catch (error) {
      setError(true);
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
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
        <Link to="/register">Register or</Link>
        <Button type="submit">Login</Button>
      </S.Actions>

      {error && <S.Help color="danger">Email or Password invalid</S.Help>}
    </S.Form>
  );
}

export default LoginForm;
