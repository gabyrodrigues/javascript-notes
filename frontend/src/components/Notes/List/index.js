import React from 'react';
import Moment from 'moment';

import * as S from './styles';
import { Button } from '../../Button';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

const NotesList = (props) => {
  return (
    <S.List>
      <S.Column>
        <S.Counter>{props.notes.length} Notes</S.Counter>
        <Button onClick={() => props.createNote()}>Notes +</Button>
      </S.Column>

      {props.notes.map((item, key) =>
        <S.Item key={key} onClick={() => props.selectNote(item._id)} active={item === props.currentNote}>
          <S.Title>
            {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
          </S.Title>
          <S.Body>
            {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
            {/* remove tags html */}
          </S.Body>

          <S.Info>
            <S.Date>
              {Moment(item.created_at).format('DD/MM')}
            </S.Date>
            <S.Delete>
              <S.FAIcon
                icon={faTrash}
                onClick={() => props.deleteNote(item)}
              />
            </S.Delete>
          </S.Info>
        </S.Item>
      )}

    </S.List>
  );
}

export default NotesList;
