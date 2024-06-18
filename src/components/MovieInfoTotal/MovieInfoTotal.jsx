import Button from '@/components/Button'
import IconClose from '@/assets/images/ic-close.svg?react'
import {
  countSelectedSeats,
  selectedSeatNamesString,
  setSelectedCinemaShow,
  setSelectedFilm,
  setSelectedShowtime,
  clearShowtime
} from '@/redux/slices/bookTicket'
import { getHourAndMinute } from '@/utils/datetime'
import { useDispatch, useSelector } from 'react-redux'
import { path } from '@/routes/path'

export default function MovieInfoTotal() {
  const dispatch = useDispatch()
  const { selectedFilm, selectedShowtime, selectedCinemaShow } = useSelector((state) => state.bookTicket)
  const seatNames = useSelector(selectedSeatNamesString)
  const numOfSelectedSeats = useSelector(countSelectedSeats)
  const handleClose = () => {
    dispatch(clearShowtime())
  }

  return (
    <div className='sticky bottom-0 left-0 z-20 flex h-[150px] w-full items-center justify-between gap-4 border border-x-transparent border-b-transparent border-t-white-custom-700 bg-black-custom-700 p-3 text-white-custom-700'>
      <div className='relative h-full w-full'>
        <div className='mx-auto flex h-full w-full max-w-container flex-row justify-center px-container'>
          <div className='flex flex-grow flex-col justify-center gap-3'>
            <div className='line-clamp-1 text-xl font-bold'>{selectedFilm?.info.filmName}</div>
            <div className='text-md font-normal'>
              <span>{selectedCinemaShow.cinemaName}</span>
              {numOfSelectedSeats > 0 && (
                <span>
                  {' '}
                  | {numOfSelectedSeats} Seat{numOfSelectedSeats > 1 && 's'}
                </span>
              )}
            </div>
            <div className='text-md font-medium'>
              <span>Screen: {selectedShowtime.screenId}</span>
              {seatNames && <span> | {seatNames}</span>}
              <span> | {getHourAndMinute(selectedShowtime.time)}</span>
            </div>
          </div>
          <div className='flex h-full w-[250px] min-w-[250px] flex-col justify-between gap-2'>
            <div className=''>
              <div className='text-md font-medium'>Temporary price calculation</div>
              <div className='text-2xl font-bold'>0 VND</div>
            </div>
            <Button title='Booking' link={path.checkout} />
          </div>
        </div>
        <IconClose
          className='absolute right-2 top-0 h-[28px] w-[28px] hover:cursor-pointer hover:filter-light-gray-custom'
          onClick={handleClose}
        />
      </div>
    </div>
  )
}
