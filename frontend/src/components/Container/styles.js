import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
    height: 100%;
    margin: 0 auto;
    padding: 40px;
    position: relative;
    width: auto;

    @media (max-width: 768px) {
        padding: 40px 20px;
        flex-direction: column;
    }

    @media (min-width: 1025px) {
        max-width: 1150px;
    }

    @media (min-width: 1440px) {
        max-width: 1290px;
    }
`;

export const Section = styled.section`
    background-color: #694ED8;
    height: calc(100% - 64px);
`;