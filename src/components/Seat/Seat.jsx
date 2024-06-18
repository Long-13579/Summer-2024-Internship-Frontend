import { cn } from '@/lib/utils'
import SingleSeat from '@/assets/images/seat-single.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSelectedSeat, isSelectedSeat } from '@/redux/slices/bookTicket'

export default function Seat({ seat }) {
  const isSelected = useSelector((state) => isSelectedSeat(state, seat))

  const dispatch = useDispatch()

  const toggleSelected = () => {
    dispatch(toggleSelectedSeat(seat))
  }

  return (
    <div
      className={cn('relative flex min-h-[30px] min-w-[40px] items-center justify-center', {
        'hover:cursor-pointer': seat.isSeat && !seat.isSold,
        'hover:cursor-default': !seat.isSeat || seat.isSold || seat.onHold
      })}
      onClick={seat.isSold || seat.onHold ? null : toggleSelected}
    >
      {seat.isSeat && (
        <>
          <img
            src={SingleSeat}
            alt='seat'
            className={cn('h-[30px] w-[40px]', {
              'filter-dark-gray-custom': seat.isSold,
              'filter-blue-custom': seat.onHold,
              'filter-yellow-custom': isSelected
            })}
          />
          <span
            className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold', {
              'text-gray-custom-500': seat.isSold,
              'text-purple-custom-700': !seat.isSold,
              'text-white-custom-700': seat.onHold
            })}
          >
            {seat.name}
          </span>
        </>
      )}
    </div>
  )
}
