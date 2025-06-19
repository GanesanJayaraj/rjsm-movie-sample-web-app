import React, { useEffect, useState } from 'react'
import PopularMovies from './components/PopularMovies'

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 400);
    return () => clearTimeout(timer)
  }, [searchValue]);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value)
  };

  useEffect(() => {
    if (debouncedSearchValue) {
      console.log(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);


  return (
    <div className='container m-auto w-full h-full text-white'>

      <div className='flex flex-col items-center'>
        <img src="./hero-img.png" alt="" />
        <div className='text-6xl text-white max-w-2xl text-center mt-[-24px] mb-8'>
          Find <span className='custom-gradient'>Movies</span> You'll Love Without the Hassle
        </div>
        <div className='bg-[#151c3b] py-3 px-3 m-4 rounded-md flex flex-row gap-2 items-center justify-center'>
          <span className=''>🔎</span>
          <input type="text" id='search-movie' onChange={handleSearchInput} className='w-sm text-sm text-[#d4dcff] outline-0' placeholder='Search through 300+ movies online' />
        </div>
        {searchValue}
        <PopularMovies query={debouncedSearchValue} />
      </div>
    </div>
  )
}

export default App