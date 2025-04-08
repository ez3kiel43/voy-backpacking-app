import { Outlet, useNavigate } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import supabase from '../lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function DashboardLayout() {
	let navigate = useNavigate();
	const [user, setUser] = useState(supabase.auth.getUser());

	useEffect(() => {
		if (user == null) {
			navigate('/');
		} else {
			return;
		}
	});

	return (
		<>
			<Header />
			<main className="dashboard-main w-full h-full bg-green py-28 text-white text-lg overflow-hidden relative">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
