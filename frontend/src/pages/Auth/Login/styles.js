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
    }
`;

export const Section = styled.section`
    background-color: #694ED8;
    height: calc(100% - 70px);
`;

export const Card = styled.div`
    background-color: #fff;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    margin: 0 auto;
    max-width: 350px;

    @media (max-width: 768px) {
        max-width: 100%;
    }

    @media (min-width: 1025px) {
        max-width: 400px;
    }
`;

export const Content = styled.div`
    padding: 40px;
`;

export const ImgContainer = styled.div`
    margin-bottom: 40px;
    width: 100%;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Description = styled.p`
    color: #7a7a7a;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
`;