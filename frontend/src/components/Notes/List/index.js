import React from 'react';
import Moment from 'moment';

import { Body, Column, Counter, Date, Delete, FAIcon, Info, Item, List, Title } from './styles';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

const NotesList = (props) => {
    return (
        <List>
            <Column>
                <Counter>{props.notes.length} Notes</Counter>
            </Column>

            { props.notes.map((item, key) =>
                <Item key={key} onClick={() => props.selectNote(item._id)} active={item === props.currentNote}>
                    <Title>
                        {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
                    </Title>
                    <Body>
                        {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
                        {/* remove tags html */}
                    </Body>

                    <Info>
                        <Date>
                            { Moment(item.created_at).format('DD/MM') }
                        </Date>
                        <Delete>
                            <FAIcon 
                                icon={faTrash}
                                // onClick={() => props.deleteNote(item)}
                            />
                        </Delete>
                    </Info>
                </Item>
            )}
            
        </List>
    );
}

export default NotesList;