import Search from '@/icons/Search';
import { useState } from 'react';

export default function CustomSearchBar() {
  const [search, setSearch] = useState('');
  const [lastSearch, setLastSearch] = useState('');

  const handleSearch = () => {
    if (search === '' || search === lastSearch) return;

    setLastSearch(search);
    console.log('searching...', search);
  };

  return (
    <div className="flex w-full relative">
      <input
        className="border-[2px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-6"
        placeholder="Buscar Servicios y Productos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-4 rounded-full hover:bg-primary-300 transition-all duration-300 ease-in-out">
        <Search />
      </button>
    </div>
  );
}
