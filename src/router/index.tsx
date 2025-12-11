import { createBrowserRouter } from 'react-router-dom';
import { RouteLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import { CamisasPage } from '../pages/CamisasPage';
import { AboutPage } from '../pages/AboutPage';
import { CamisaPage } from '../pages';



export const router = createBrowserRouter([
	{
		path: '/',
		element: <RouteLayout />,
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
		],
	},
]);