export default function Login() {
	return (
		<>
			<form>
				<label htmlFor="email">Email:</label>
				<input
					name="email"
					type="email"
					placeholder="email@mail.com"
				/>
				<label htmlFor="password">Password:</label>
				<input
					name="password"
					type="password"
					placeholder="password"
				/>
			</form>
		</>
	);
}
