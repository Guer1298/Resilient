import { createBrowserRouter } from 'react-router-dom';
import { RouteLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import { CamisasPage } from '../pages/CamisasPage';
import { AboutPage } from '../pages/AboutPage';



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
				path: 'celulares',
				element: <CamisasPage />,
			},
			{
				path: 'nosotros',
				element: <AboutPage />,
			},
		],
	},
]);