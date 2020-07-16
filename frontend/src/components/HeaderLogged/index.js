import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import logo from '../../assets/images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faList } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';
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
    <S.Navbar>
      <S.Container>
        <S.Info>
          <Link to="/">
            <S.Logo src={logo} alt="logo" />
          </Link>
          <S.Burger
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
            onClick={handleToggleActive}
            className={active && "active"}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </S.Burger>
        </S.Info>

        <S.Menu id="navbar-menu" active={active}>
          {
            location.pathname === "/notes" &&
            <S.Item>
              <Button white onClick={() => props.setIsOpen(true)}>
                <FontAwesomeIcon icon={faList} />
              </Button>
            </S.Item>
          }

          <S.Item>
            <S.Dropdown ref={wrapperRef}>
              <S.DropButton dropdownVisible={dropdownVisible} onClick={handleToggleDropdownVisible} white>
                <span>{JSON.parse(user)['name']}</span>
                <span><S.FAAngleIcon icon={faAngleDown} /></span>
              </S.DropButton>
              <S.DropMenu dropdownVisible={dropdownVisible}>
                <S.DropItem>
                  <S.DropLink to="/profile">Edit Profile</S.DropLink>
                </S.DropItem>

                <S.DropDivider />

                <S.DropItem>
                  <Button onClick={e => logout()}>
                    Logout
                  </Button>
                </S.DropItem>
              </S.DropMenu>
            </S.Dropdown>

          </S.Item>
        </S.Menu>
      </S.Container>
    </S.Navbar>
  );
}

export default HeaderLogged;
