import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
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
`;

export const Column = styled.div`
    align-items: flex-start; 
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        flex-basis: 100%;
    }

    @media (min-width: 1440px) {
        &:first-of-type {
            flex-basis: 40%;
        }
    }
`;

export const Img = styled.img`
    height: auto;
    max-width: 100%;
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