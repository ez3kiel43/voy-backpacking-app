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
import DashboardLayout from '../components/DashboardLayout';
import App from '../App';

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		children: [
			{
				Component: AuthLayout,
				children: [
					{ index: true, Component: Home },
					{
						path: 'login',
						Component: Login,
					},
					{ path: 'register', Component: Register },
					{ path: 'forgot', Component: ResetPassword },
				],
			},
			{
				Component: DashboardLayout,
				path: 'dashboard',
				children: [
					{ index: true, Component: Packs },
					{ path: 'gear', Component: Gear },
					{ path: 'logs', Component: Logs },
					{
						path: 'account',
						Component: Account,
					},
				],
			},
		],
	},
]);

export { router };
