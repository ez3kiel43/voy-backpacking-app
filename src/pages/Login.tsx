import { Link, useLocation, useNavigate } from 'react-router';
import Arrow from './../assets/arrrow_right.svg';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';
import { MessageModal } from '../components/displayMessage';
import { ModalOverlay } from '../components/Overlay';
import { LoginSchema } from '../lib/LoginSchema';
import { z } from 'zod';

export default function Login() {
	let location = useLocation();
	const navigate = useNavigate();
	const [inputEmail, setInputEmail] = useState(
		location.state ? location.state.email : ''
	);
	const [inputPass, setInputPass] = useState('');

	const [message, setMessage] = useState('');
	const [showModal, setShowModal] = useState(false);

	async function LoginUser() {
		const credentials = {
			email: inputEmail.trim(),
			password: inputPass.trim(),
		};

		try {
			const result = LoginSchema.parse(credentials);
			// console.log(result);

			const { data, error } = await supabase.auth.signInWithPassword({
				email: result.email,
				password: result.password,
			});

			if (error) {
				setMessage(error.message);
				return;
			}

			if (data) {
				navigate('/dashboard');
			}
		} catch (e) {
			if (e instanceof z.ZodError) {
				setMessage(
					`error: ${e.errors
						.map(err => err.message)
						.join('\n')} at loginSchema`
				); // You can show these in UI
			} else {
				// console.error(e);
				setMessage(
					'An unexpected error occurred. Please try again later.'
				);
			}
		}
	}

	const closeModal = () => {
		setShowModal(false);
	};

	useEffect(() => {
		if (message != '') setShowModal(true);
	}, [message]);

	return (
		<>
			<MessageModal
				show={showModal}
				message={message}
				closeFn={closeModal}
			/>
			<ModalOverlay show={showModal} />
			<main className="pt-8">
				<h1 className="text-white text-xl text-center font-thin">
					Account Credentials
				</h1>
				<form className="auth-form" method="post">
					<label htmlFor="login-email">
						Email:
						<input
							id="login-email"
							name="email"
							type="email"
							placeholder="email@mail.com"
							onChange={e => {
								setInputEmail(e.target.value);
							}}
							required
						/>
					</label>

					<label htmlFor="login-password">
						Password:
						<input
							id="login-password"
							name="password"
							type="password"
							placeholder="password"
							onChange={e => {
								setInputPass(e.target.value);
							}}
							required
						/>
					</label>
					<button
						onClick={e => {
							e.preventDefault();
							LoginUser();
						}}
					>
						Log In{' '}
						<img
							src={Arrow}
							role="presentation"
							className="inline"
						/>
					</button>
				</form>
				<p className="font-sans text-white text-xl text-center italic mt-4">
					No Account?{' '}
					<Link className="underline" to={'/register'}>
						Register Here!
					</Link>
				</p>
			</main>
		</>
	);
}
