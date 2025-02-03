import Search from '@/icons/Search';
import { useCallback, useEffect, useState } from 'react';

interface Prop {
  onSearch: (search: string) => void;
}

export default function SelectionCardHeader({ onSearch }: Prop) {
  const [search, setSearch] = useState('');

  const handleSearch = useCallback((query: string) => onSearch(query), [onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(search);
    }
  };

  return (
    <section className="bg-primary w-full h-[15%] flex justify-center items-center px-12">
      <div className="flex w-full relative">
        <input
          type="text"
          className="border-[2px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-6"
          placeholder="Buscar Servicios y Productos"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          onClick={() => handleSearch(search)}
          className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-4 rounded-full hover:bg-primary/20 transition-all duration-300 ease-in-out">
          <Search />
        </button>
      </div>
    </section>
  );
}
