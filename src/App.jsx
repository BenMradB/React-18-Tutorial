const Logo = () => {
	return <h1>Logo </h1>;
};

const NavItem = () => {
	return <li>Home</li>;
};

const Nav = () => {
	return (
		<nav>
			<ul>
				<NavItem />
				<NavItem />
				<NavItem />
			</ul>
		</nav>
	);
};

const Header = () => {
	return (
		<header
			style={{
				width: '100vw',
				height: '100px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
			<Logo />
			<Nav />
		</header>
	);
};

const App = () => {
	return <Header />;
};
