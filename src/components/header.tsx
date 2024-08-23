import { Link } from "react-router-dom";
import { useUserStore } from "../store";

export default function Header() {

	const user = useUserStore(state => state.user)
	const signOut = useUserStore(state => state.logout)

	const onClick = async () => {
		fetch('http://127.0.0.1:3000/auth/logout', {
			method: 'POST',
			credentials: 'include'
		})
			.then(res => res.json())
			.then(data => console.log(data))
		signOut()
	}

	return <header className="w-full rounded-lg bg-gray-200 h-24 flex items-center justify-between px-12 gap-2">
		<Link className="text-3xl font-serif font-semibold text" to={'/'}>Plagapp</Link>
		<nav className="flex items-center justify-center gap-2">
			{user == null ? (
				<>
					<Link className="text-blue-900 font-semibold text-lg py-2 px-4 rounded-lg text-center" to={'/login'}>Ingresar</Link>
					<Link className="text-gray-200 font-semibold text-lg py-2 px-4 rounded-md text-center bg-blue-500" to={'/register'}>Crear cuenta</Link>
				</>

			) : (
				<button className="text-gray-200 font-semibold text-lg py-2 px-4 rounded-md text-center bg-blue-500" onClick={onClick}>Logout</button>
			) }
		</nav>
	</header>;
}
