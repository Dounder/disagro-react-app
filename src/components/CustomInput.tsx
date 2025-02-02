import { HTMLInputTypeAttribute, ChangeEvent } from 'react';

interface Props {
	id: string;
	label: string;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({ label, type = 'text', id, placeholder, value, onChange }: Props) {
	return (
		<div className="w-full">
			<label htmlFor={id} className="block mb-2 text-2xl font-bold text-gray-900">
				{label}
			</label>
			<input
				type={type}
				id={id}
				className="border-[2px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-6"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
