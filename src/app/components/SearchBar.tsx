'use client';

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Are you looking for something?"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full py-1 pl-8 pr-4 bg-gray-200 text-gray-500 rounded-full focus:outline-none focus:ring-2 text-xs font-arial"
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-800" />
    </div>
  );
};

export default SearchBar;
