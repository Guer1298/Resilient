import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import { CamisasPage } from '../pages/CamisasPage';
import { AboutPage } from '../pages/AboutPage';
import { CamisaPage, LoginPage, OrdersUserPage, RegisterPage, CheckoutPage} from '../pages';
import { ClientLayout } from '../layouts/ClientLayout';



export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'camisas',
				element: <CamisasPage />,
			},
			{
				path: 'camisas/:slug',
				element: <CamisaPage />,

			},
			{
				path: 'nosotros',
				element: <AboutPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'registro',
				element: <RegisterPage />,
			},
			{
				path: 'account',
				element: <ClientLayout />,
				children: [
					{
						path: '',
						element: <Navigate to='/account/pedidos'  />,
					},
					{
						path: 'pedidos',
						element: <OrdersUserPage />,

					},
					
				],
			},

			{
				path: '/checkout',
				element: <CheckoutPage />,
			}

		],
	},
]);