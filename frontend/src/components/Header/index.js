import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import { Burger, Container, LinkButton, Logo, Info, Item, Menu, Navbar} from './styles';

const Header = () => {
	const [active, setActive] = useState(false);

	function handleToggleActive () {
		setActive(!active);
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
						className={ active && "active" }>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</Burger>
				</Info>

				<Menu id="navbar-menu" active={active}>
                    <Item>
                        <LinkButton to="/register">Register</LinkButton>
                    </Item>
                    <Item>
                        <LinkButton to="/login" className="outlined">Login</LinkButton>
                    </Item>
				</Menu>
			</Container>
		</Navbar>
    );
}

export default Header;