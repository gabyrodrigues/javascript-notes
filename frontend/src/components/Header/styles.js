import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
    align-items: center;
    background-color: #fff;
    display: block;
    max-height: 70px;
    position: relative;
    z-index: 30;
`;

export const Container  = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 0;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 40px;
    position: relative;
    width: 100%;

    @media (max-width: 768px) {
        display: block;
        padding: 10px 20px;
    }

    @media (min-width: 1025px) {
        max-width: 1150px;
    }

    @media (min-width: 1440px) {
        max-width: 1290px;
    }
`;

export const Info = styled.div`
    align-items: center;
    display: flex;
    flex-shrink: 0;
`;

export const Logo = styled.img`
    height: 40px;
`;


export const Menu = styled.div`
    display: flex;

    @media (max-width: 768px) {
        background-color: #fff;
        box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
        display: ${props => (props.active ? 'block' : 'none')};
        margin: 0 -20px;
        padding: 10px;
    }
`;

export const Item = styled.div`
    display: flex;
    padding: 0 10px;
`;

export const LinkButton = styled(Link)`
    border: 1px solid transparent;
    border-radius: 5px;
    color: #694ED8;
    font-size: 16px;
    padding: 10px;
    text-decoration: none;

    &:hover {
        background-color: #f9f9f9;
    }

    &.outlined {
        border-color: #694ed8;

        &:hover {
            background-color: #694ed8;
            color: #fff;
        }
    }
`;

export const Burger = styled.div`
    cursor: pointer;
    display: block;
    height: 30px;
    margin-left: auto;
    position: relative;
    width: 30px;

    span {
        background-color: #000;
        display: block;
        height: 1px;
        left: calc(50% - 8px);
        position: absolute;
        transform-origin: center;
        transition-duration: 86ms;
        transition-property: background-color, opacity, transform;
        transition-timing-function: ease-out;
        width: 16px;

        &:nth-child(1) {
            top: calc(50% - 6px);
        }

        &:nth-child(2) {
            top: calc(50% - 1px);
        }

        &:nth-child(3) {
            top: calc(50% + 4px);
        }

    }

    @media (max-width: 768px) {
        &.active {
            span {

                &:nth-child(1) {
                    transform: translateY(5px) rotate(45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                }

                &:nth-child(3) {
                    transform: translateY(-5px) rotate(-45deg);
                }

            }
        }
    }

    @media (min-width: 769px) {
        display: none;
    }
`;