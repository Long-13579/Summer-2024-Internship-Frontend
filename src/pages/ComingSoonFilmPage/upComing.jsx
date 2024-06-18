import React, { useState, useEffect } from 'react'
import ListFilm from '@/components/ListFilm/ListFilm'
import { getUpComingFilm } from '@/apis/film'

export default function UpComing() {
  const [upComing, setUpComing] = useState([])

  const fetchUpComingFilms = async () => {
    const upComingFilms = await getUpComingFilm()
    setUpComing(upComingFilms)
  }

  useEffect(() => {
    fetchUpComingFilms()
  }, [])

  return (
    <div className='mb-8 flex w-full flex-col items-center'>
      <div className='relative max-w-container px-[12px] text-center'>
        <h1 className='py-10 font-sans text-4xl font-bold text-white'>COMING SOON</h1>
        <ListFilm films={upComing} />
      </div>
    </div>
  )
}
