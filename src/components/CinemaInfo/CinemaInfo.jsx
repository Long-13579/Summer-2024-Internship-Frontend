import IconLocation from '@/assets/images/ic-location.svg?react'
import { IMG_CINEMA } from './constants'
import { Fragment } from 'react'

export default function CinemaInfo({ info }) {
  return (
    <div className='flex w-full'>
      <img src={IMG_CINEMA} className='max-h-[170px]' />
      <div className='flex flex-grow flex-col justify-center gap-6 bg-gradient-to-r from-purple-custom-700 to-blue-custom-700 px-10'>
        {info && (
          <Fragment>
            <h1 className='text-4xl font-bold uppercase'>{info?.name}</h1>
            <div className='flex items-center gap-2 text-lg font-semibold'>
              <IconLocation className='filter-yellow-custom' />
              <span>{`${info?.address}, ${info?.provinceCity}`}</span>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}
