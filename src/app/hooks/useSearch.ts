import { useState } from 'react';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return {
    searchTerm,
    setSearchTerm,
  };
};

export default useSearch;
