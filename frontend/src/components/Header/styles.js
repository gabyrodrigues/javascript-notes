import styled from 'styled-components';

export const Navbar = styled.nav`
    align-items: center;
    background-color: #fff;
    display: flex;
    max-height: 70px;
    position: relative;
`;

export const Container  = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
`;

export const Info = styled.div`
    display: flex;
    flex-shrink: 0;
`;

export const Logo = styled.img`
    height: 40px;
`;


export const Menu = styled.div`
    display: flex;
`;

export const Item = styled.div`
    display: flex;

    a {
        color: #694ED8;
        font-size: 16px;
        padding: 15px;
        text-decoration: none;
    }
`;

export const Burger = styled.div`

`;