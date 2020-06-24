import styled from 'styled-components';

export const Column = styled.div`
    flex-basis: 50%;

    a {
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        display: inline-flex;
        font-size: 22px;
        font-weight: 700;
        margin-top: 40px;
        padding: 15px;
        text-align: center;
        text-decoration: none;

        &:hover {
            background-color: #fff;
            color: #000;
        }
    }

    @media (max-width: 768px) {
        flex-basis: 100%;
    }

    @media (min-width: 1440px) {
        &:first-of-type {
            flex-basis: 40%;
        }
    }
`;

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

export const Img = styled.img`
    height: auto;
    max-width: 100%;
`;

export const Section = styled.section`
    background-color: #694ED8;
    height: 100%;
`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 20px;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 40px;
`;