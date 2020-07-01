import styled from 'styled-components';
import Container from '../../components/Container';

export const ProfileContainer = styled(Container)`
    flex-direction: column;
`;

export const Block = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;

    & + * {
        margin-top: 30px;
    }
`;

export const Card = styled.div`
    background-color: #fff;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    margin: 0 auto;
    width: 100%;
`;

export const Content = styled.div`
    padding: 20px 40px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const Title = styled.h1`
    color: #7a7a7a;
    font-size: 20px;
    margin-bottom: 15px;
    width: 100%;
`;