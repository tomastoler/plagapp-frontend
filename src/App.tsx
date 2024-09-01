import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home-page';
import RegisterPage from './pages/auth/register-page';
import LoginPage from './pages/auth/login-page';
import AdminHomePage from './pages/admin/admin-home-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/admin',
    element: <AdminHomePage />
  }
])

export default function App() {
	return (
		<RouterProvider router={router} />
	);
}
