import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/Button'
import { Icons } from '@/components/FilmCard/constant'
import IconPlayVideo from '@/assets/images/ic-play-video.svg?react'

const FilmCard = ({ film }) => {
  const { id, title, poster, ageRating, format, category, duration, nation, subtitle } = film
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = () => {
    setIsDragging(false)
  }

  const handleMouseMove = () => {
    setIsDragging(true)
  }

  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault()
    }
  }

  const handleDragStart = (e) => {
    e.preventDefault()
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDragEnd = (e) => {
    e.preventDefault()
  }

  const filmDetails = [
    { icon: Icons.TagIcon, label: 'Category', value: category },
    { icon: Icons.ClockIcon, label: 'Duration', value: `${duration}'` },
    { icon: Icons.EarthIcon, label: 'Nation', value: nation },
    { icon: Icons.SubtitleIcon, label: 'Subtitle', value: subtitle }
  ]

  return (
    <div
      className='group/card relative flex w-full max-w-xs cursor-pointer flex-col overflow-hidden rounded-lg text-white shadow-lg'
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Link to={`/film/${id}`} onClick={handleClick} className='block'>
        <div className='relative flex h-full justify-center'>
          <div className='aspect-h-3 aspect-w-2 w-full overflow-hidden rounded-lg'>
            <img src={poster} alt={title} className='h-full w-full object-cover' />
          </div>
          <div className='absolute left-0 top-2 flex -translate-y-2 transform flex-row'>
            <div className='min-w-[40px] bg-yellow-500 px-2 text-center font-bold text-black opacity-90 transition-transform duration-300 group-hover/card:-translate-y-1'>
              {ageRating}
            </div>
            <div className='min-w-[40px] bg-red-500 px-2 text-center font-bold text-white opacity-90 transition-transform duration-300 group-hover/card:-translate-y-1'>
              {format}
            </div>
          </div>
          <div className='absolute inset-0 flex flex-col items-start justify-center space-y-2 bg-gray-900 bg-opacity-90 p-4 text-left opacity-0 transition-opacity duration-300 group-hover/card:opacity-100'>
            <h2 className='text-center text-xl font-bold'>{title}</h2>
            {filmDetails.map(({ icon: IconComponent, label, value }, index) => (
              <div key={index} className='flex items-center space-x-2'>
                <IconComponent className='h-5 w-5' alt={label} />
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 className='mt-4 text-center text-lg font-bold group-hover/card:text-yellow-custom-700'>{title}</h2>
      </Link>
      <div className='mt-6 flex items-center justify-between'>
        <div className='gap flex h-full items-center gap-2 hover:cursor-pointer hover:text-yellow-custom-700'>
          <IconPlayVideo className='h-[20px] w-[20px]' />
          <span className='text-md font-semibold capitalize underline underline-offset-3'>Watch Trailer</span>
        </div>
        <div className='flex items-center'>
          <Button title='BOOK' extraClass='px-10 py-2' link={`/film/${id}`} />
        </div>
      </div>
    </div>
  )
}

export default FilmCard
