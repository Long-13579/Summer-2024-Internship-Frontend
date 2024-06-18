import IconArrowUp from '@/assets/images/ic-arrow-up.svg?react'
import IconArrowDown from '@/assets/images/ic-arrow-down.svg?react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { getHourAndMinute, isCurrentTimeGreaterThan } from '@/utils/datetime'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedShowtime, setSelectedCinemaShow, clearSeatList } from '@/redux/slices/bookTicket'
import { CSSTransition } from 'react-transition-group'

export default function CinemaShow({ cinemaShow }) {
  const { selectedShowtime } = useSelector((state) => state.bookTicket)
  const dispatch = useDispatch()
  const [isShowingDetails, setIsShowingDetails] = useState(true)

  const toggleShowingDetails = () => {
    setIsShowingDetails(!isShowingDetails)
  }

  const handleSelectShowtime = (showtime) => {
    if (!isCurrentTimeGreaterThan(showtime.dateStart, showtime.timeStart)) {
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
        <h2 className='text-xl font-semibold capitalize'>{cinemaShow.name}</h2>
        {isShowingDetails && <IconArrowUp className='h-[28px] w-[28px]' />}
        {!isShowingDetails && <IconArrowDown className='h-[28px] w-[28px]' />}
      </div>
      <CSSTransition
        in={isShowingDetails}
        timeout={300}
        classNames={{
          enter: 'expand-enter',
          enterActive: 'expand-enter-active',
          exit: 'expand-exit',
          exitActive: 'expand-exit-active'
        }}
        unmountOnExit
      >
        <div className='px-6 pb-6 text-white-custom-700'>
          <div className='text-md font-medium'>{cinemaShow.address}</div>
          <div className='mt-4'>
            <div className='text-md font-medium'>Standard</div>
            <div className='mt-2 flex flex-wrap gap-2'>
              {cinemaShow.shows.map((showtime) => (
                <div
                  key={showtime.id}
                  className={cn('text-md w-[70px] rounded-sm border py-1 text-center font-medium', {
                    'border-gray-custom-500 text-gray-custom-500 hover:cursor-default': isCurrentTimeGreaterThan(
                      showtime.dateStart,
                      showtime.timeStart
                    ),
                    'border-white-custom-700 text-white-custom-700 hover:cursor-pointer hover:border-yellow-custom-700 hover:text-yellow-custom-700':
                      !isCurrentTimeGreaterThan(showtime.dateStart, showtime.timeStart),
                    'border-yellow-custom-700 text-yellow-custom-700': showtime.id === selectedShowtime?.id
                  })}
                  onClick={() => handleSelectShowtime(showtime)}
                >
                  {getHourAndMinute(showtime.timeStart)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}
