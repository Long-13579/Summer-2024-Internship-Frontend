import { getInformationOfFilm } from '@/apis/film'
import MovieDetailInfo from '@/components/MovieDetailInfo'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetailPage() {
  const { id: filmId } = useParams()
  const [filmDetail, setFilmDetail] = useState({})

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
      </div>
    </div>
  )
}
