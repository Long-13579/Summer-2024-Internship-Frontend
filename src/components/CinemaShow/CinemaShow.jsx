import IconArrowUp from '@/assets/images/ic-arrow-up.svg'
import IconArrowDown from '@/assets/images/ic-arrow-down.svg'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { getHourAndMinute, isCurrentTimeGreaterThan } from '@/utils/datetime'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedShowtime, setSelectedCinemaShow, clearSeatList } from '@/redux/slices/bookTicket'
import { CSSTransition } from 'react-transition-group'
import '@/styles/transition.css'

export default function CinemaShow({ cinemaShow }) {
  const { selectedShowtime } = useSelector((state) => state.bookTicket)
  const dispatch = useDispatch()
  const [isShowingDetails, setIsShowingDetails] = useState(true)

  const toggleShowingDetails = () => {
    setIsShowingDetails(!isShowingDetails)
  }

  const handleSelectShowtime = (showtime) => {
    if (!isCurrentTimeGreaterThan(showtime.time)) {
      dispatch(setSelectedCinemaShow(cinemaShow))
      dispatch(setSelectedShowtime(showtime))
      dispatch(clearSeatList())
    }
  }

  return (
    <div
      className={cn('rounded-sm', {
        'bg-purple-custom-700 text-yellow-custom-700': isShowingDetails,
        'bg-gray-custom-500 text-white-custom-700': !isShowingDetails
      })}
    >
      <div className='flex items-center justify-between px-6 py-5 hover:cursor-pointer' onClick={toggleShowingDetails}>
        <h2 className='text-xl font-semibold capitalize'>{cinemaShow.cinemaName}</h2>
        <img src={isShowingDetails ? IconArrowUp : IconArrowDown} alt='arrow' className='h-[28px] w-[28px]' />
      </div>
      <CSSTransition in={isShowingDetails} timeout={300} classNames='expand' unmountOnExit>
        <div className='px-6 pb-6 text-white-custom-700'>
          <div className='text-md font-medium'>{cinemaShow.cinemaAddress}</div>
          <div className='mt-4'>
            <div className='text-md font-medium'>Standard</div>
            <div className='mt-2 flex flex-wrap gap-2'>
              {cinemaShow.shows.map((showtime) => (
                <div
                  key={showtime.showId}
                  className={cn('text-md w-[70px] rounded-sm border py-1 text-center font-medium', {
                    'border-gray-custom-500 text-gray-custom-500': isCurrentTimeGreaterThan(showtime.time),
                    'border-white-custom-700 text-white-custom-700 hover:cursor-pointer hover:border-yellow-custom-700 hover:text-yellow-custom-700':
                      !isCurrentTimeGreaterThan(showtime.time),
                    'border-yellow-custom-700 text-yellow-custom-700': showtime.showId === selectedShowtime?.showId
                  })}
                  onClick={() => handleSelectShowtime(showtime)}
                >
                  {getHourAndMinute(showtime.time)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}
