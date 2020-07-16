import React, { useState, useEffect } from 'react';

import { Container, Content, NotesMenu, Section } from './styles';
import NotesService from '../../services/notes';
import Editor from './Editor'

import NotesList from './List';
import Search from './Search';

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

  const createNote = async () => {
    await NotesService.create();
    fetchNotes();
  }

  const deleteNote = async (note) => {
    await NotesService.delete(note._id);
    fetchNotes();
  }

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NotesService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote); //encontrar a nota para atualizar
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  }

  const searchNotes = async (query) => {
    console.log("Search");
    const response = await NotesService.search(query);
    setNotes(response.data);
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
          <Search
            searchNotes={searchNotes}
            fetchNotes={fetchNotes}
          />
        </Content>
        <NotesList
          notes={notes}
          selectNote={selectNote}
          currentNote={currentNote}
          createNote={createNote}
          deleteNote={deleteNote}
        />
      </NotesMenu>
      <Container id="notes-editor">
        <Editor
          note={currentNote}
          updateNote={updateNote}
        />
      </Container>
    </Section>
  );
}

export default Notes;
