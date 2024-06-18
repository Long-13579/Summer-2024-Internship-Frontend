import React, { useEffect, useState } from 'react'
import { getUpComingFilm, getOnCastingFilm } from '@/apis/film'
import SlideFilm from '@/components/SlideFilm/SlideFilm'
import Button from '../Button'

export default function SlideFilmContainer() {
  const [upComing, setUpComing] = useState([])
  const [onCasting, setOnCasting] = useState([])

  const fetchUpComingFilms = async () => {
    const upComingFilms = await getUpComingFilm()
    setUpComing(upComingFilms)
  }

  const fetchOnCastingFilms = async () => {
    const onCastingFilms = await getOnCastingFilm()
    setOnCasting(onCastingFilms)
  }

  useEffect(() => {
    fetchUpComingFilms()
    fetchOnCastingFilms()
  }, [])

  return (
    <div className='mb-8 flex w-full flex-col items-center'>
      {onCasting && onCasting.length > 0 && (
        <div className='relative max-w-container px-[12px] text-center'>
          <h1 className='py-10 font-sans text-4xl font-bold'>NOW SHOWING</h1>
          <SlideFilm films={onCasting} className='-mx-2' />
          <div className='mt-12 flex justify-center'>
            <Button title='View All' link='/film/nowshowing' />
          </div>
        </div>
      )}
      {upComing && upComing.length > 0 && (
        <div className='relative max-w-container px-container text-center'>
          <h1 className='py-10 font-sans text-4xl font-bold'>COMING SOON</h1>
          <SlideFilm films={upComing} />
          <div className='mt-12 flex justify-center'>
            <Button title='View All' link='/film/comingsoon' extraClass='p' />
          </div>
        </div>
      )}
    </div>
  )
}
