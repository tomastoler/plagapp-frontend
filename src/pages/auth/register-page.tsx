import AuthFormCard from "../../components/auth-form-card";
import FormInput from "../../components/form-input";
import Header from "../../components/header";
import { useRegisterStore, useUserStore } from "../../store";

export default function RegisterPage() {
	return (
		<div className="w-screen h-screen flex flex-col p-4 gap-4">
			<Header />
			<main className="w-full h-full rounded-lg flex justify-center items-center">
				<AuthFormCard formTitle="Creá tu cuenta" innerForm={<RegisterForm />} />
			</main>
		</div>
	);
}

function RegisterForm() {

	const name = useRegisterStore(state => state.name)
	const lastname = useRegisterStore(state => state.lastname)
	const email = useRegisterStore(state => state.email)
	const password = useRegisterStore(state => state.password)

	const setName = useRegisterStore(state => state.setName)
	const setLastname = useRegisterStore(state => state.setLastname)
	const setEmail = useRegisterStore(state => state.setEmail)
	const setPassword = useRegisterStore(state => state.setPassword)

	const setUser = useUserStore(state => state.login)
	const reset = useRegisterStore(state => state.reset)

	const onSubmit = async (e: React.FormEvent ) => {
		e.preventDefault()

		const res = await fetch('http://127.0.0.1:3000/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name, lastname, password, email
			}),
			credentials: 'include'
		})

		reset()
		const user = await res.json()
		setUser(user.user)
	}

	return (
		<form className="flex flex-col items-center gap-4 w-full px-12" onSubmit={onSubmit} method="POST">
			<FormInput type="text" name="name" placeholder="Nombre ..." setState={setName} />
			<FormInput type="text" name="lastname" placeholder="Apellido ..." setState={setLastname}/>
			<FormInput type="email" name="email" placeholder="Email ..." setState={setEmail}/>
			<FormInput type="password" name="password" placeholder="Contraseña ..." setState={setPassword}/>
			<button
				type="submit"
				className="text-center w-full py-2 bg-blue-500 text-white rounded-md text-lg"
			>
				Crear cuenta
			</button>
		</form>
	);
}


