import { NavLink, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import triangle from './../assets/triangle.svg';
import circle from './../assets/circle.svg';
import square from './../assets/square.svg';

export const Footer: React.FC = () => {
	const [hide, setHide] = useState(false);

	let location = useLocation();

	useEffect(() => {
		// console.log(location.pathname.split('/')[2]);
		if (location.pathname.split('/')[2] == 'account') {
			setHide(true);
		} else {
			setHide(false);
		}
	}, [location]);

	return (
		<footer
			className={`h-24 bg-dark-green w-full absolute bottom-0 ${
				hide ? 'hidden' : 'block'
			}`}
		>
			<nav className="w-full flex justify-around items-center h-full">
				<NavLink to="gear">
					<img src={triangle} alt="gear" />
				</NavLink>
				<NavLink to="/dashboard/">
					<img src={circle} alt="packs" />
				</NavLink>
				<NavLink to="logs">
					<img src={square} alt="logs" />
				</NavLink>
			</nav>
		</footer>
	);
};
