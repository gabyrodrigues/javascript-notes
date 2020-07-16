import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import logo from '../../assets/images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faList } from '@fortawesome/free-solid-svg-icons';

import { Burger, Container, Dropdown, DropButton, DropDivider, DropLink, DropItem, DropMenu, FAAngleIcon, Logo, Info, Item, Menu, Navbar } from './styles';
import { Button } from '../../components/Button';

import UsersService from '../../services/users';

const HeaderLogged = (props) => {
  const [active, setActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [user] = useState(localStorage.getItem('user'));

  const history = useHistory();

  const wrapperRef = useRef(null);

  let location = useLocation();

  function handleToggleDropdownVisible() {
    setDropdownVisible(!dropdownVisible);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);

    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  function handleClickOutside(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setDropdownVisible(false);
    }
  }

  function handleToggleActive() {
    setActive(!active);
  }

  async function logout() {
    await UsersService.logout();
    history.push('/');
  }

  return (
    <Navbar>
      <Container>
        <Info>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Burger
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
            onClick={handleToggleActive}
            className={active && "active"}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Burger>
        </Info>

        <Menu id="navbar-menu" active={active}>
          {
            location.pathname === "/notes" &&
            <Item>
              <Button white onClick={() => props.setIsOpen(true)}>
                <FontAwesomeIcon icon={faList} />
              </Button>
            </Item>

          }

          <Item>
            <Dropdown ref={wrapperRef}>
              <DropButton dropdownVisible={dropdownVisible} onClick={handleToggleDropdownVisible} white>
                <span>{JSON.parse(user)['name']}</span>
                <span><FAAngleIcon icon={faAngleDown} /></span>
              </DropButton>
              <DropMenu dropdownVisible={dropdownVisible}>
                <DropItem>
                  <DropLink to="/profile">Edit Profile</DropLink>
                </DropItem>

                <DropDivider />

                <DropItem>
                  <Button onClick={e => logout()}>
                    Logout
                                    </Button>
                </DropItem>
              </DropMenu>
            </Dropdown>

          </Item>
        </Menu>
      </Container>
    </Navbar>
  );
}

export default HeaderLogged;
