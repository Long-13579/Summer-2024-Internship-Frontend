import { getInformationOfFilm } from '@/apis/film'
import MovieDetailInfo from '@/components/MovieDetailInfo'
import MovieInfoTotal from '@/components/MovieInfoTotal'
import SeatingMap from '@/components/SeatingMap'
import ShowTime from '@/components/ShowTime'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function MovieDetailPage() {
  const { id: filmId } = useParams()
  const [filmDetail, setFilmDetail] = useState({})
  const { selectedShowtime } = useSelector((state) => state.bookTicket)

  const fetchInformationOfFilm = async (filmId) => {
    const informationOfFilm = await getInformationOfFilm(filmId)
    setFilmDetail(informationOfFilm)
  }

  useEffect(() => {
    fetchInformationOfFilm(filmId)
  }, [filmId])

  return (
    <div className='min-h-[100vh] w-full bg-main pt-6'>
      <div className='mx-auto max-w-container px-container text-white-custom-700'>
        <MovieDetailInfo info={filmDetail?.filmInfo} />
        <ShowTime film={filmDetail} />
        {selectedShowtime && <SeatingMap />}
      </div>
      {selectedShowtime && <MovieInfoTotal />}
    </div>
  )
}
