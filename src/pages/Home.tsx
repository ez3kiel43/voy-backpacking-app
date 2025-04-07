import { Link } from 'react-router';

export const Home: React.FC = () => {
	return (
		<main>
			<div className="w-full flex flex-col text-center py-8">
				<button>
					<Link to={'login'}>Log in</Link>
				</button>
				<p className="text-white bold text-xl">OR</p>
				<button>
					<Link to={'register'}>Register</Link>
				</button>
			</div>
		</main>
	);
};
