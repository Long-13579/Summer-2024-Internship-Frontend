import ShowsWithinDay from '@/components/ShowsWithinDay'
import { MOVIE_INFO } from './constants'
import ImageEmpty from '@/assets/images/img-empty.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { path } from '@/routes/path'

export default function MovieShows({ movie }) {
  const navigate = useNavigate()
  const [imageError, setImageError] = useState(false)

  const handleLoadImageError = () => {
    setImageError(true)
  }

  const navigateToDetailFilmPage = () => {
    navigate(path.film.replace(':id', movie.infor.id))
  }

  return (
    <div className='flex w-full gap-3'>
      <div className='min-w-[280px] max-w-[280px] hover:cursor-pointer' onClick={navigateToDetailFilmPage}>
        <img
          src={imageError ? ImageEmpty : movie.infor.poster}
          onError={handleLoadImageError}
          className='object-container h-auto w-full rounded-md'
        />
      </div>
      <div className='flex w-full flex-col'>
        <div className='flex w-full flex-col'>
          <h2 className='text-xl font-bold uppercase'>{movie.infor.filmName}</h2>
          <div className='mt-2 flex flex-wrap items-center gap-x-2 gap-y-2'>
            {MOVIE_INFO(movie.infor).map(
              ({ text, icon: IconComponent }, index) =>
                text && (
                  <div className='flex items-center gap-1 text-sm font-semibold' key={index}>
                    <IconComponent className='h-[20px] w-[20px] min-w-[20px]' />
                    <span>{text}</span>
                  </div>
                )
            )}
          </div>
        </div>
        <div className='mt-2 flex w-full flex-col gap-y-[6px]'>
          {movie.showTime.map((showTime) => (
            <ShowsWithinDay key={showTime.dateStart} filmId={movie.infor.id} showTime={showTime} />
          ))}
        </div>
      </div>
    </div>
  )
}
