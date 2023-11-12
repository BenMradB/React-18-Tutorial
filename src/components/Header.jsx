import { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
	return (
		<header
			style={{
				width: 'calc(100% - 40px)',
				height: '100px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '20px',
			}}>
			<Logo />
			<Nav />
		</header>
	);
};

export default Header;
