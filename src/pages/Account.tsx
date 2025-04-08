import { useState, useEffect } from 'react';
import AccIcon from './../assets/account-icon_light.svg';
import supabase from '../lib/supabaseClient';
import { useNavigate } from 'react-router';

type AccData = {
	email: string | undefined;
	user_name: string;
	date_of_birth: string;
	height: number;
	weight: number;
};

export const Account: React.FC = () => {
	const [userInfo, setUserInfo] = useState<AccData>({
		email: '',
		user_name: '',
		date_of_birth: '',
		height: 0,
		weight: 0,
	});
	const navigate = useNavigate();

	async function loadData() {
		const user = await supabase.auth.getUser();

		// console.log(user.data.user?.email);

		const { data, error } = await supabase
			.from('profiles')
			.select('user_name, date_of_birth, height, weight')
			.eq('id', user.data.user?.id)
			.single();

		if (error) {
			console.log(error.message);
		}
		if (data) {
			// console.log(data);
			setUserInfo({
				email: user.data?.user?.email,
				...data,
			});
		}
	}

	async function logoutUser() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			alert('there was an unexpected error. Please try again later');
		}
		if (!error) {
			navigate('/');
		}
	}

	useEffect(() => {
		loadData();
		// console.log(userInfo);
	}, []);

	return (
		<div className="w-full h-full font-extralight text-xl tracking-wide fade">
			<section className="border-b-4 border-white text-center w-4/5 mx-auto py-4">
				<img src={AccIcon} alt="Profile Icon" className="mx-auto" />
				<p>{userInfo.user_name}</p>
				<p>{userInfo.email}</p>
				<button className="inverted">Edit Credentials</button>
			</section>
			<section className="border-b-4 border-white text-center w-4/5 mx-auto py-4">
				<p>Birthday: {userInfo.date_of_birth}</p>
				<p>Height: {userInfo.height}cm</p>
				<p>Weight: {userInfo.weight}kg</p>
				<button className="inverted">Edit Info</button>
			</section>

			<section className="text-center w-4/5 mx-auto py-4">
				<button
					className="danger"
					onClick={() => {
						// console.log(e);
						logoutUser();
					}}
				>
					Logout
				</button>
				<button className="danger">Delete Account</button>
			</section>
		</div>
	);
};
