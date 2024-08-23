interface FormInputProps {
	type: string;
	name: string;
	placeholder: string;
	setState: (n: string) => void;
}

export default function FormInput({
	type,
	name,
	placeholder,
	setState,
}: FormInputProps) {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			className="w-full px-2 py-1 rounded-sm"
			onChange={(e) => setState(e.target.value)}
		/>
	);
}
