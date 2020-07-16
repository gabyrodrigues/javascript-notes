import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../components/Button';

export const Navbar = styled.nav`
  align-items: center;
  background-color: #694ed8;
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
  padding: 10px 20px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
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
    flex: 1;
    justify-content: space-between;
    padding: 0 20px;

    @media (max-width: 768px) {
        background-color: #694ed8;
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
    color: #fff;
    font-size: 16px;
    padding: 10px;
    text-decoration: none;

    &:hover {
        background-color: #f9f9f9;
    }

    &.outlined {
        border-color: #fff;

        &:hover {
            background-color: #fff;
            color: #694ED8;
        }
    }
`;

export const FAAngleIcon = styled(FontAwesomeIcon)`
    margin-left: 5px;
`;

export const Dropdown = styled.div`
    position: relative;
`;

export const DropDivider = styled.hr`
    background-color: #ededed;
    border: none;
    display: block;
    height: 1px;
    margin: 0.5rem 0;
`;

export const DropItem = styled.div`
    display: flex;
    padding: 10px;
`;

export const DropLink = styled(Link)`
    color: #3273dc;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        color: #363636;
    }
`;

export const DropMenu = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    display: ${props => (props.dropdownVisible ? 'block' : 'none') };
    min-width: 150px;
    padding: 10px 0;
    position: absolute;
    top: calc(100% + 15px);
`;

export const Burger = styled.div`
    cursor: pointer;
    display: block;
    height: 30px;
    margin-left: auto;
    position: relative;
    width: 30px;

    span {
        background-color: #fff;
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

export const DropButton = styled(Button)`
    background-color: ${props => (props.dropdownVisible ? '#fff' : '#694ED8') };
    color: ${props => (props.dropdownVisible ? '#694ED8' : '#fff') };
`;
