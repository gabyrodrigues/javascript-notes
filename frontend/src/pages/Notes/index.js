import React, { useState } from 'react';

import HeaderLogged from '../../components/HeaderLogged';
import Notes from '../../components/Notes';

const NotesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default NotesPage;
