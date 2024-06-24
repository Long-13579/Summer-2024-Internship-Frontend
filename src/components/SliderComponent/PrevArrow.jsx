import React, { useState } from 'react'
import PrevIcon from '@/assets/navigate-before.svg?react'

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className='absolute left-[-70px] top-1/2 z-10 -translate-y-1/2 transform cursor-pointer fill-white hover:fill-yellow-300'
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <PrevIcon className='h-14 w-auto' />
    </div>
  )
}

export default PrevArrow
