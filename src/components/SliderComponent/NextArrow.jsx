import React, { useState } from 'react'
import NextIcon from '@/assets/navigate-next.svg?react'

const NextArrow = ({ onClick }) => {
  return (
    <div
      className='absolute right-[-70px] top-1/2 z-10 -translate-y-1/2 transform cursor-pointer fill-white hover:fill-yellow-300'
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <NextIcon className='h-14 w-auto' />
    </div>
  )
}

export default NextArrow
