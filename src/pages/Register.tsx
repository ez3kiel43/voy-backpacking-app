import { Link } from 'react-router';
import Arrow from './../assets/arrrow_right.svg';
import Compass from './../assets/compass.svg';
import { useState } from 'react';

export const Register: React.FC = () => {
	const [form1, setForm1] = useState(true);

	const toggleFormPos = () => {
		console.log(form1);
		setForm1(pos => {
			return (pos = !pos);
		});
	};

	return (
		<main className="h-full">
			<form className="auth-form relative mt-8" action={'/dashboard'}>
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
						/>
					</label>

					<label htmlFor="register-password">
						Password:
						<input
							id="register-password"
							name="password"
							type="password"
							placeholder="password"
						/>
					</label>
					<label htmlFor="register-confirm-password">
						Confirm Password:
						<input
							id="register-confirm-password"
							name="confirm-password"
							type="password"
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
						/>
					</label>
					<label htmlFor="birthday">
						Date of Birth:
						<input
							id="birthday"
							name="birthday"
							type="date"
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
							/>
						</label>
						<label
							htmlFor="unitW"
							className="text-left w-1/2"
						>
							Unit:
							<select name="unitW" id="unitW">
								<option value="cm">kg</option>
								<option value="in">lbs</option>
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
						<button>
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
	);
};
