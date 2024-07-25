import { getInformationOfFilm } from '@/apis/film'
import MovieDetailInfo from '@/components/MovieDetailInfo'
import MovieInfoTotal from '@/components/MovieInfoTotal'
import SeatingMap from '@/components/SeatingMap'
import ShowTime from '@/components/ShowTime'
import { countSelectedSeats } from '@/redux/slices/bookTicket'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function MovieDetailPage() {
  const { id: filmId } = useParams()
  const [filmDetail, setFilmDetail] = useState({})
  const { selectedShowtime } = useSelector((state) => state.bookTicket)
  const numOfSelectedSeats = useSelector(countSelectedSeats)
  const seatingMapRef = useRef(null)
  const showTimeRef = useRef(null)

  const fetchInformationOfFilm = async (filmId) => {
    const informationOfFilm = await getInformationOfFilm(filmId)
    setFilmDetail(informationOfFilm)
  }

  useEffect(() => {
    fetchInformationOfFilm(filmId)
  }, [filmId])

  useEffect(() => {
    if (selectedShowtime && seatingMapRef.current) {
      seatingMapRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [selectedShowtime])

  return (
    <div className='min-h-[100vh] w-full bg-main pt-6'>
      <div className='mx-auto max-w-container px-container text-white-custom-700'>
        <MovieDetailInfo info={filmDetail?.filmInfo} />
        <ShowTime film={filmDetail} ref={showTimeRef} />
        {selectedShowtime && <SeatingMap ref={seatingMapRef} />}
      </div>
      {selectedShowtime && numOfSelectedSeats > 0 && <MovieInfoTotal showTimeRef={showTimeRef} />}
    </div>
  )
}
