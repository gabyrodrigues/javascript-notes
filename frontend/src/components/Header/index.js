import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import * as S from './styles';

const Header = () => {
	const [active, setActive] = useState(false);

	function handleToggleActive () {
		setActive(!active);
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
							className={ active && "active" }>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</S.Burger>
					</S.Info>

					<S.Menu id="navbar-menu" active={active}>
						<S.Item>
							<S.LinkButton to="/register">Register</S.LinkButton>
						</S.Item>
						<S.Item>
							<S.LinkButton to="/login" className="outlined">Login</S.LinkButton>
						</S.Item>
					</S.Menu>
				</S.Container>
			</S.Navbar>
    );
}

export default Header;
