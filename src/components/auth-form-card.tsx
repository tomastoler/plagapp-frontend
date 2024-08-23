import { ReactNode } from "react";

interface AuthFormCardProps {
	formTitle: string;
	innerForm?: ReactNode;
}

export default function AuthFormCard({
	formTitle,
	innerForm,
}: AuthFormCardProps) {
	return (
		<div className="w-80  bg-gray-200 rounded-lg flex flex-col items-center py-16 gap-6">
			<h1 className="font-semibold font-serif text-xl">{formTitle}</h1>
			{innerForm}	
		</div>
	);
}
