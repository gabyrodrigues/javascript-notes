import React, { useState } from 'react';

import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  const [query, setQuery] = useState('');

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      props.searchNotes(query);
    }
  }

  return (
    <S.Block>
      <S.Input
        type="text"
        placeholder="Search note..."
        name={query}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <S.Button
        onClick={() => {
          props.fetchNotes();
          setQuery('');
        }}
        title="Cancelar pesquisa"
      >
        <FontAwesomeIcon size="sm" color="#7f7f7f" icon={faTimes} />
      </S.Button>
    </S.Block>
  );
}

export default Search;
