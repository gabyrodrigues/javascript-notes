import styled from 'styled-components';

export const Section = styled.section`
    background-color: ${props => (props.white ? "#fff" : "#694ED8")};
    height: calc(100% - 64px);
`;