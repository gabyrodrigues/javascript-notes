import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as S from './styles';

import usersService from '../../../services/users';

const DeleteAccount = () => {
  const history = useHistory();

  async function handleDeleteAccount() {
    try {
      if (window.confirm('Are you sure you wish to delete this account?')) {
        await usersService.delete();
        history.push('/');
      }
    } catch (error) {
      toast.error("An error has occurred. Please, try again.");
    }
  }

  return (
    <S.Control>
      <S.Delete onClick={() => handleDeleteAccount()}>Delete account</S.Delete>
    </S.Control>
  );
}

export default DeleteAccount;
