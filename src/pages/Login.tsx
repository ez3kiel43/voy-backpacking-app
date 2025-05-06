import { Link, useNavigate } from 'react-router';
import Arrow from './../assets/arrrow_right.svg';

export default function Login() {
	const navigate = useNavigate();

	return (
		<>
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
							required
						/>
					</label>
					<button
						onClick={e => {
							e.preventDefault();
							navigate('../dashboard');
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
