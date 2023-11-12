import NavItem from './NavItem';

const Nav = () => {
	return (
		<nav id='id'>
			<ul
				style={{
					display: 'flex',
					gap: '10px',
					listStyle: 'none',
				}}>
				<NavItem item='Home' />
				<NavItem item='About Us' />
				<NavItem item='Contact Us' />
			</ul>
		</nav>
	);
};

export default Nav;
