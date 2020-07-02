import React from 'react';

import { Container, Content, NotesMenu, Section } from './styles';
 
const Notes = (props) => {
    return (
        <Section>
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
                <p>List...</p>
            </NotesMenu>
            <Container id="notes-editor">
                Editor...
            </Container>
        </Section>
    );
}

export default Notes;