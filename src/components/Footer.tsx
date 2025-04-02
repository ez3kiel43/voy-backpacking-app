import { NavLink } from 'react-router';
import triangle from './../assets/triangle.svg';
import circle from './../assets/circle.svg';
import square from './../assets/square.svg';

export const Footer: React.FC = () => {
	return (
		<footer className="h-24 bg-dark-green w-full absolute bottom-0 ">
			<nav className="w-full flex justify-around items-center h-full">
				<NavLink to="gear">
					<img src={triangle} alt="gear" />
				</NavLink>
				<NavLink to="packs">
					<img src={circle} alt="packs" />
				</NavLink>
				<NavLink to="logs">
					<img src={square} alt="logs" />
				</NavLink>
			</nav>
		</footer>
	);
};
