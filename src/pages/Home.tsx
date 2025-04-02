import { Link } from 'react-router';
import Logo from './../assets/logo.svg';

export const Home: React.FC = () => {
	return (
		<main className="w-screen h-screen bg-white">
			<h1 className="text-green text-4xl font-sans text-center">
				Welcome to
				<img src={Logo} alt="Voy" className="w-1/2 mx-auto" />
			</h1>
			<h2>Your Trail tested, pocket sized planner!</h2>

			<p>PLease Login or Register!</p>
			<Link to={'login'}>
				<button>Log in</button>
			</Link>
			<Link to={'register'}>
				<button>Register</button>
			</Link>
		</main>
	);
};
