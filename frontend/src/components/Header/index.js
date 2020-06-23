import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import { Burger, Container, Logo, Info, Item, Menu, Navbar} from './styles';

const Header = () => {
	const [active, setActive] = useState(false);

	function handleToggleActive () {
		setActive(!active);
		console.log("Oi")
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
                        <Link to="/register">Register</Link>
                    </Item>
                    <Item>
                        <Link to="/login" className="outlined">Login</Link>
                    </Item>
				</Menu>
			</Container>
		</Navbar>
    );
}

export default Header;