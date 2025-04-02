import { Account } from '../pages/Account';
import { Gear } from '../pages/Gear';
import { Logs } from '../pages/Logs';
import { Packs } from '../pages/Packs';
import Login from '../pages/Login';
import { ResetPassword } from '../pages/Forgot';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { createBrowserRouter } from 'react-router';
import AuthLayout from '../components/AuthLayout';
import App from '../App';

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		children: [
			{ index: true, Component: Home },
			{
				Component: AuthLayout,
				children: [
					{ path: 'login', Component: Login },
					{ path: 'register', Component: Register },
					{ path: 'forgot', Component: ResetPassword },
				],
			},
			{
				path: 'dashboard',
				children: [
					{ index: true, Component: Packs },
					{ path: 'gear', Component: Gear },
					{ path: 'logs', Component: Logs },
					{ path: 'account', Component: Account },
				],
			},
		],
	},
]);

export { router };
