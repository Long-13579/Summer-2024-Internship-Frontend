import React from 'react'
import FilmCard from '@/components/FilmCard'

const ListFilm = ({ films }) => {
  if (!films) {
    return <div>Loading...</div>
  }

  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {films.map((film) => (
          <div key={film.id}>
            <FilmCard film={film} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListFilm
