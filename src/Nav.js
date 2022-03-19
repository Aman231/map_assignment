import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const myDebounce = (fn) => {
	let id;
	return (...args) => {
		if (id) clearTimeout();
		id = setTimeout(() => {
			fn(...args);
			console.log('Debounce is changing ', ...args);
		}, 1000);
	};
};

const Nav = () => {
	const { setSearch } = useContext(DataContext);
	const debounced = myDebounce(setSearch);

	return (
		<nav className="Nav">
			<form className="searchForm" onSubmit={(e) => e.preventDefault()}>
				<label htmlFor="search">Search Places</label>
				<input id="search" type="text" placeholder="Search Places" onChange={(e) => debounced(e.target.value)} />
			</form>
			<ul>
				<li>
					<Link to="/">List</Link>
				</li>
				<li>
					<Link to="/post">Map</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
