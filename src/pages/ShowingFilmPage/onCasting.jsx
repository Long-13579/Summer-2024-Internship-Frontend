import React, { useState, useEffect } from 'react'
import ListFilm from '@/components/ListFilm/ListFilm'
import { getOnCastingFilm } from '@/apis/film'

export default function OnCasting() {
  const [onCasting, setonCasting] = useState([])

  const fetchonCastingFilms = async () => {
    const onCastingFilms = await getOnCastingFilm()
    setonCasting(onCastingFilms)
  }

  useEffect(() => {
    fetchonCastingFilms()
  }, [])

  return (
    <div className='mb-8 flex w-full flex-col items-center'>
      <div className='relative w-full max-w-container px-container'>
        <h1 className='py-10 text-center font-sans text-4xl font-bold text-white'>Now Showing</h1>
        <ListFilm films={onCasting} />
      </div>
    </div>
  )
}
