import { HTMLInputTypeAttribute, ChangeEvent } from 'react';

interface Props {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function CustomInput({ label, type = 'text', id, placeholder, value, onChange, error }: Props) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-xl font-bold text-gray-900">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`border-[2px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-4 transition-all duration-300 ease-in-out ${
          error ? 'border-red-500' : ''
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div
        className={`transition-all duration-300 ease-in-out ${error ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-red-500 text-sm mt-1">{error}</p>
      </div>
    </div>
  );
}
