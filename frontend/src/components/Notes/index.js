import React, { useState, useEffect } from 'react';

import { Container, Content, NotesMenu, Section } from './styles';
import NotesService from '../../services/notes';

import NotesList from './List';
 
const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState({ title: "", body: "", id: "" });

    async function fetchNotes() {
        const response = await NotesService.index();

        if (response.data.length >= 1) {
            setNotes(response.data.reverse()); //organiza as notas em ordem decrescente (mais recente pra mais antiga)
            setCurrentNote(response.data[0]); //a nota mais nova vai ser a atual
        } else {
            setNotes([]);
        }
    }

    const selectNote = (id) => {
        const note = notes.find((note) => {
            return note._id === id;
        });

        setCurrentNote(note);
        
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <Section id="notes">
            <NotesMenu
                pageWrapId={"notes-editor"}
                isOpen={props.isOpen}
                onStateChange={(state) => props.setIsOpen(state.isOpen)}
                disableAutoFocus
                outerContainerId={"notes"}
                customBurgerIcon={false}
                customCrossIcon={false}
            >
                <Content>
                    Search...
                </Content>
                <NotesList 
                    notes={notes}
                    selectNote={selectNote}
                    currentNote={currentNote}
                />
            </NotesMenu>
            <Container id="notes-editor">
                Editor...
            </Container>
        </Section>
    );
}

export default Notes;