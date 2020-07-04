import styled from 'styled-components';
import { push as Menu } from 'react-burger-menu';

export const Section = styled.section`
    display: flex;
    height: calc(100% - 64px);
`;

export const Content = styled.div`
    display: block;
    margin-bottom: 20px;
`;

export const Container = styled.div`
    display: block;
    height: calc(100% - 43px);
    padding: 0;
    width: 100%;

    .quill{
        height: 100%;
    }
`;

export const NotesMenu = styled(Menu)`
    background-color: #fff;
    padding-top: 10px;
`;