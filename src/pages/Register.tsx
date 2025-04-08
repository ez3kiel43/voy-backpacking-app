import { Link } from 'react-router';
import Arrow from './../assets/arrrow_right.svg';
import Compass from './../assets/compass.svg';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';
import { RegisterSchema, RegisterData } from '../lib/registerFormZod';
import { z } from 'zod';
import { useNavigate } from 'react-router';
import { MessageModal } from '../components/displayMessage';
import { ModalOverlay } from '../components/Overlay';

export const Register: React.FC = () => {
	const [form1, setForm1] = useState(true);
	const [userEmail, setUserEmail] = useState('');
	const [pass, setPass] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [username, setUsername] = useState('');
	const [birthday, setBirthday] = useState('');
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);
	const [showMsgModal, setShowMsgModal] = useState(false);
	const [displayMessage, setDisplayMessage] = useState('Error');

	const navigate = useNavigate();

	const toggleFormPos = () => {
		// console.log(form1);
		setForm1(pos => {
			return (pos = !pos);
		});
	};

	async function registerNewUser() {
		const info = {
			email: userEmail,
			password: pass,
			confirmPassword: confirmPass,
			name: username,
			birthday: birthday,
			weight: weight,
			height: height,
		};
		try {
			const result = RegisterSchema.parse(info); // throws if invalid
			const { data, error } = await supabase.auth.signUp({
				email: result.email,
				password: result.password,
			});

			if (error) {
				setDisplayMessage(
					`error: ${error.message} at registerNewUser`
				);
			}

			if (data?.user) {
				setDisplayMessage('Account successfully created!');
				navigate('/login', { state: { userEmail } });
				console.log(result);
				recordPersonalInfo(data.user.id, result);
			}
		} catch (e) {
			if (e instanceof z.ZodError) {
				setDisplayMessage(
					`error: ${e.errors
						.map(err => err.message)
						.join('\n')} at registerSchema`
				); // You can show these in UI
			}
		}
	}

	async function recordPersonalInfo(UID: string, values: RegisterData) {
		console.log(UID);
		const { error } = await supabase.from('Profiles').insert({
			id: UID,
			user_name: values.name,
			date_of_birth: values.birthday,
			height: values.height,
			weight: values.weight,
		});

		if (error) {
			console.log(error);
			setDisplayMessage(
				`error: ${error.message} at RecordPersonalInfo`
			);
		}
	}

	const closeModal = () => {
		setShowMsgModal(false);
	};

	useEffect(() => {
		setShowMsgModal((show: boolean) => {
			return (show = !show);
		});
	}, [displayMessage]);

	return (
		<>
			<ModalOverlay show={showMsgModal} />
			<main className="h-full">
				<MessageModal
					message={displayMessage}
					show={showMsgModal}
					closeFn={closeModal}
				/>

				<form className="auth-form relative mt-8" method="post">
					<div
						className={`absolute flex flex-col w-full gap-4 items-end ${
							form1 ? 'right-0' : 'right-100'
						}`}
					>
						<h2 className="text-white text-xl text-center font-thin self-center">
							Account Credentials
						</h2>
						<label htmlFor="register-email">
							Email:
							<input
								id="register-email"
								name="email"
								type="email"
								placeholder="email@mail.com"
								onChange={e => {
									setUserEmail(e.target.value);
								}}
							/>
						</label>

						<label htmlFor="register-password">
							Password:
							<input
								id="register-password"
								name="password"
								type="password"
								placeholder="password"
								onChange={e => {
									setPass(e.target.value);
								}}
							/>
						</label>
						<label htmlFor="register-confirm-password">
							Confirm Password:
							<input
								id="register-confirm-password"
								name="confirm-password"
								type="password"
								onChange={e => {
									setConfirmPass(e.target.value);
								}}
							/>
						</label>
						<button
							onClick={e => {
								e.preventDefault();
								toggleFormPos();
							}}
						>
							Next{' '}
							<img
								src={Arrow}
								role="presentation"
								className="inline"
							/>
						</button>
						<p className="font-sans text-white text-xl text-center italic mt-4 relative bottom-0 self-center">
							Already have an account?{' '}
							<Link className="underline" to={'/login'}>
								Login
							</Link>
						</p>
					</div>
					<div
						className={`absolute flex flex-col w-full gap-4 items-end ${
							form1 ? 'left-100' : 'left-0'
						}`}
					>
						<h2 className="text-white text-xl text-center font-thin self-center">
							Personal Info
						</h2>
						<label htmlFor="user-name">
							Name:
							<input
								id="user-name"
								name="username"
								type="text"
								placeholder="John Doe"
								onChange={e => {
									setUsername(e.target.value);
								}}
							/>
						</label>
						<label htmlFor="birthday">
							Date of Birth:
							<input
								id="birthday"
								name="birthday"
								type="date"
								min={'1900-01-01'}
								max={'2012-01-01'}
								onChange={e => {
									setBirthday(e.target.value);
								}}
							/>
						</label>
						<div className="w-full flex justify-between items-center">
							<label htmlFor="height" className="w-2/5">
								Height:
								<input
									type="number"
									name="height"
									id="height"
									className="w-full"
									onChange={e => {
										setHeight(
											Number(e.target.value)
										);
									}}
								/>
							</label>
							<label
								htmlFor="unitH"
								className="text-left w-1/2"
							>
								Unit:
								<select name="unitH" id="unitH">
									<option value="cm">cm</option>
									<option value="in">inches</option>
								</select>
							</label>
						</div>
						<div className="w-full flex justify-between items-center">
							<label htmlFor="weight" className="w-2/5">
								Weight:
								<input
									type="number"
									name="weight"
									id="weight"
									className="w-full"
									onChange={e => {
										setWeight(
											Number(e.target.value)
										);
									}}
								/>
							</label>
							<label
								htmlFor="unitW"
								className="text-left w-1/2"
							>
								Unit:
								<select name="unitW" id="unitW">
									<option value="kg">kg</option>
									<option value="lbs">lbs</option>
								</select>
							</label>
						</div>

						<div className="w-full flex justify-between">
							<button
								className="text-left"
								onClick={e => {
									e.preventDefault();
									toggleFormPos();
								}}
							>
								<img
									src={Arrow}
									role="presentation"
									className="inline rotate-180"
								/>
								Back
							</button>
							<button
								onClick={e => {
									e.preventDefault();
									registerNewUser();
								}}
							>
								Register{' '}
								<img
									src={Compass}
									role="presentation"
									className="inline w-12"
								/>
							</button>
						</div>
					</div>
				</form>
			</main>
		</>
	);
};
