import Hide from '@/icons/Hide';
import Show from '@/icons/Show';
import { ChangeEvent, useState } from 'react';

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function CustomInputPassword({ label, id, placeholder, value, onChange, error }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-xl font-bold text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          id={id}
          className={`border-[2px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-4 transition-all duration-300 ease-in-out ${
            error ? 'border-red-500' : ''
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className="absolute right-0 z-30 inset-y-1 flex items-center px-4">
          <button type="button" className="z-30" onClick={() => setShow((prev) => !prev)}>
            {show ? <Show /> : <Hide />}
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${error ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-red-500 text-sm mt-1">{error}</p>
      </div>
    </div>
  );
}
