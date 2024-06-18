import { cn } from '@/lib/utils'
import SingleSeat from '@/assets/images/seat-single.svg?react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSelectedSeat, isSelectedSeat } from '@/redux/slices/bookTicket'

export default function Seat({ seat }) {
  const { isSeat, isSold, onHold, name } = seat
  const isSelected = useSelector((state) => isSelectedSeat(state, seat))

  const dispatch = useDispatch()

  const toggleSelected = () => {
    dispatch(toggleSelectedSeat(seat))
  }

  return (
    <div
      className={cn('relative flex min-h-[30px] min-w-[40px] items-center justify-center', {
        'hover:cursor-pointer': isSeat && !isSold,
        'hover:cursor-default': !isSeat || isSold || onHold
      })}
      onClick={isSold || onHold ? null : toggleSelected}
    >
      {isSeat && (
        <>
          <SingleSeat
            className={cn('h-[30px] w-[40px]', {
              'filter-dark-gray-custom': isSold,
              'filter-blue-custom': onHold,
              'filter-yellow-custom': isSelected
            })}
          />
          <span
            className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold', {
              'text-gray-custom-500': isSold,
              'text-purple-custom-700': !isSold,
              'text-white-custom-700': onHold
            })}
          >
            {name}
          </span>
        </>
      )}
    </div>
  )
}
