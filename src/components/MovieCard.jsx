import React from 'react'

const MovieCard = ({ movie: { title, poster_path, vote_average, original_language, release_date } }) => {
  return (
    <div className='custom-bg-grad mx-auto w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 rounded-md text-[#d7dcff]'>
      <div className='w-full h-full p-2 flex flex-col gap-2'>
        <img className='w-full h-full object-contain rounded-md' src={`https://image.tmdb.org/t/p/w500/${poster_path ? poster_path : 'no-movie.png'}`}  alt={title || "Movie poster"} />
        <p className='text-sm tracking-wide'>{title}</p>
        <div className='flex flex-row gap-2 text-xs tracking-wide'><span className='mx-[-3px]'>⭐</span> {vote_average.toFixed(2)} <span>◽</span> <span className='capitalize'>{original_language}</span> <span>◽</span>  <span>{release_date.split("-")[0]}</span> </div>
      </div>
    </div>
  )
}

export default MovieCard