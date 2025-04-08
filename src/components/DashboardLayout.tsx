import { Outlet, useLocation, useNavigate } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';

export default function DashboardLayout() {
	let location = useLocation();
	const navigate = useNavigate();

	const [userID, setUserID] = useState(
		location.state ? location.state : null
	);

	useEffect(() => {
		if (!userID) {
			navigate('/');
		}
	}, [userID]);

	return (
		<>
			{!userID ? (
				<></>
			) : (
				<>
					<Header />
					<main className="dashboard-main w-full h-full bg-green py-28 text-white text-lg overflow-hidden relative">
						<Outlet context={{ userID }} />
					</main>
					<Footer />
				</>
			)}
		</>
	);
}
