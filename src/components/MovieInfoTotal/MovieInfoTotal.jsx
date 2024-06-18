import Button from '@/components/Button'
import IconClose from '@/assets/images/ic-close.svg?react'
import {
  countSelectedSeats,
  selectedSeatNamesString,
  clearShowtime,
  getTotalPriceOfSelectedSeats,
  getTicketInfo
} from '@/redux/slices/bookTicket'
import { getHourAndMinute } from '@/utils/datetime'
import { useDispatch, useSelector } from 'react-redux'
import { path } from '@/routes/path'
import { setSeatsOnHold } from '@/apis/seat'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import moment from 'moment'
import { formatPrice } from '@/utils/price'
import { setTicketInfoToLocalStorage } from '@/utils/localStorage'

export default function MovieInfoTotal({showTimeRef}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { selectedFilm, selectedShowtime, selectedCinemaShow, seatList, screenName } = useSelector(
    (state) => state.bookTicket
  )
  const seatNames = useSelector(selectedSeatNamesString)
  const numOfSelectedSeats = useSelector(countSelectedSeats)
  const totalPrice = useSelector(getTotalPriceOfSelectedSeats)
  const ticketInfo = useSelector(getTicketInfo)

  const handleClose = () => {
    dispatch(clearShowtime())
    if (showTimeRef.current) {
      showTimeRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubmitSeats = async () => {
    const currentTime = moment().format()
    try {
      await setSeatsOnHold(
        selectedShowtime.id,
        seatList.map(({ colId, name }) => ({
          rowName: name[0],
          colId: colId,
          onHold: currentTime
        }))
      )
      setTicketInfoToLocalStorage(ticketInfo)
      navigate(path.checkout)
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div className='sticky bottom-0 left-0 z-20 flex h-[150px] w-full items-center justify-between gap-4 border border-x-transparent border-b-transparent border-t-white-custom-700 bg-black-custom-700 p-3 text-white-custom-700'>
      <div className='relative h-full w-full'>
        <div className='mx-auto flex h-full w-full max-w-container flex-row justify-center px-container'>
          <div className='flex flex-grow flex-col justify-center gap-3'>
            <div className='line-clamp-1 text-xl font-bold'>{selectedFilm?.filmInfo.filmName}</div>
            <div className='text-md font-normal'>
              <span>{selectedCinemaShow.name}</span>
              {numOfSelectedSeats > 0 && (
                <span>
                  {' '}
                  | {numOfSelectedSeats} Seat{numOfSelectedSeats > 1 && 's'}
                </span>
              )}
            </div>
            <div className='text-md font-medium'>
              <span>{screenName}</span>
              {seatNames && <span> | {seatNames}</span>}
              <span> | {getHourAndMinute(selectedShowtime.timeStart)}</span>
            </div>
          </div>
          <div className='flex h-full w-[250px] min-w-[250px] flex-col justify-between gap-2'>
            <div className=''>
              <div className='text-md font-medium'>Temporary price calculation</div>
              <div className='text-2xl font-bold'>{formatPrice(totalPrice) || 0} VND</div>
            </div>
            <Button title='Booking' onClick={handleSubmitSeats} />
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
