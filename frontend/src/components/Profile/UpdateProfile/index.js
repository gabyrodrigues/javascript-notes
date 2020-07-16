import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Input from '../../../components/Input';
import { Button } from '../../../components/Button';

import { Control, Form } from './styles';

import UsersService from '../../../services/users';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function loadUser() {
    const user = await JSON.parse(localStorage.getItem('user'));
    setName(user['name']);
    setEmail(user['email']);
  }

  useEffect(() => {
    loadUser();
  }, []);

  async function handleSubmitUser(e) {
    e.preventDefault();

    try {
      await UsersService.update({ name: name, email: email });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("An error has occurred. Please, try again.");
    }

  }

  return (
    <Form onSubmit={handleSubmitUser}>
      <Input
        label="Full Name"
        fontSize={16}
        htmlFor="name"
        type="text"
        id="name"
        name="name"
        required="required"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Input
        label="Email"
        fontSize={16}
        htmlFor="email"
        type="email"
        id="email"
        name="email"
        required="required"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Control>
        <Button type="submit">Update</Button>
      </Control>
    </Form>
  );
}

export default UpdateProfile
