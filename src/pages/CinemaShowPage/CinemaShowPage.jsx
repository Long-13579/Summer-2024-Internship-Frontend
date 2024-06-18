import { getCinemaInfo } from '@/apis/cinema'
import { getMoviesByCinemaId } from '@/apis/film'
import CinemaInfo from '@/components/CinemaInfo'
import MoviesContainer from '@/components/MoviesContainer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CinemaShowPage() {
  const { id: cinemaId } = useParams()
  const [cinemaInfo, setCinemaInfo] = useState(null)
  const [movies, setMovies] = useState([])

  const fetchCinemaInfo = async () => {
    const cinema = await getCinemaInfo(cinemaId)
    setCinemaInfo(cinema)
  }

  const fetchMoviesOfCinema = async () => {
    const moviesOfCinema = await getMoviesByCinemaId(cinemaId)
    setMovies(moviesOfCinema)
  }

  useEffect(() => {
    fetchCinemaInfo()
    fetchMoviesOfCinema()
  }, [cinemaId])

  return (
    <div className='mx-auto max-w-container px-container text-white-custom-700'>
      <CinemaInfo info={cinemaInfo} />
      <MoviesContainer title='Now Showing' movies={movies} />
    </div>
  )
}
