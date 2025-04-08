import Logo from './../assets/logo.svg';
import AccountIcon from './../assets/account-icon.svg';
import BackBtn from './../assets/back-btn.svg';
import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export const Header: React.FC = () => {
	const [title, setTitle] = useState('Trip Planner');
	const [showBackBtn, setShowBackBtn] = useState(false);
	const [lastPg, setLastPg] = useState('packs');

	let location = useLocation();

	useEffect(() => {
		setShowBackBtn(false);
		switch (location.pathname.split('/')[2]) {
			case 'gear':
				setTitle('Gear List');
				setLastPg('gear');
				break;
			case 'logs':
				setTitle('Adventure Logs');
				setLastPg('logs');
				break;
			case 'account':
				setTitle('Account Info');
				setShowBackBtn(true);
				break;
			default:
				setLastPg('/dashboard');
				setTitle('Trip Planner');
				break;
		}
	}, [location]);

	return (
		<header className="h-24 bg-white w-full absolute flex justify-between p-2 items-end z-100">
			<img src={Logo} alt="Voy" className="h-full w-1/4" />
			<h1 className="text-green font-semibold text-xl text-center w-1/2 tracking-wider">
				{title}
			</h1>
			<Link
				to={showBackBtn ? lastPg : 'account'}
				className="w-1/4 pl-4"
			>
				<img
					src={showBackBtn ? BackBtn : AccountIcon}
					alt={showBackBtn ? 'Back' : 'Account'}
				/>
			</Link>
		</header>
	);
};
