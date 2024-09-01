import { useEffect } from "react";
import Header from "../../components/header";
import { useUserStore } from "../../store";
import { useNavigate } from "react-router-dom";

export default function AdminHomePage() {

    const user = useUserStore(state => state.user)
	const nav = useNavigate()

	useEffect(() => {

		(() => user?.role != "admin" ? nav('/') : null)()

		const getUsers = async () => {

			const res = await fetch('http://127.0.0.1:3000/admin/users', {
				method: 'GET',
				credentials: 'include'
			})
			const data = await res.json()
			console.log(data)
		}
		getUsers()
	})

	return (
		<div className="w-screen h-screen p-4 gap-4">
			<Header />
            <main className="w-full h-full p-4 gap-4 flex">
				<div className="flex flex-col gap-4 rounded"></div>
			</main>
		</div>
	);
}
