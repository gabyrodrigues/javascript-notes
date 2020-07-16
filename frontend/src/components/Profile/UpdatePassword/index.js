import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Input from '../../../components/Input';
import { Button } from '../../../components/Button';

import UsersService from '../../../services/users';

import { Control, Form } from './styles';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  async function handleSubmitPassword(e) {
    e.preventDefault();

    try {
      if (password === passwordConfirmation) {
        await UsersService.updatePassword({ password: password });
        toast.success("Password updated succesfully!");
      } else {
        toast.error("Passwords don't match. Try again.");
      }
    } catch (error) {
      toast.error("An error has occurred. Please, try again.");
    }

  }

  return (
    <Form onSubmit={handleSubmitPassword}>
      <Input
        label="Password"
        fontSize={16}
        htmlFor="password"
        type="password"
        id="password"
        name="password"
        required="required"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Input
        label="Password Confirmation"
        fontSize={16}
        htmlFor="passwordConfirmation"
        type="password"
        id="passwordConfirmation"
        name="passwordConfirmation"
        required="required"
        value={passwordConfirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
      />

      <Control>
        <Button type="submit">Update Password</Button>
      </Control>
    </Form>
  );
}

export default UpdatePassword
