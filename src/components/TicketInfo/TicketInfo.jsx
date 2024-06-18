import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getTicketInfoFromLocalStorage, removeTicketInfoFromLocalStorage } from '@/utils/localStorage'
import { AGE_RATING } from '@/constants/movie'
import { setIsShowPopUp, setPopUpContent } from '@/redux/slices/ui'
import { EXPIRED_TICKET_TIME } from './constants'
import { path } from '@/routes/path'
import { formatPrice } from '@/utils/price'
import {
  formatDate,
  getDayOfWeek,
  getDifferenceInSeconds,
  getHourAndMinute,
  getMinuteAndSecond
} from '@/utils/datetime'
import { BOOK_TICKET_STEP } from '@/constants/bookTicket'

export default function TicketInfo() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { checkoutStepId } = useSelector((state) => state.bookTicket)
  const [ticketInfo, setTicketInfo] = useState({})
  const [remainingSeconds, setRemainingSeconds] = useState(null)

  useEffect(() => {
    const ticketInfoFromLS = getTicketInfoFromLocalStorage()
    if (!ticketInfoFromLS) {
      navigate('/')
    } else {
      setTicketInfo(ticketInfoFromLS)
      setRemainingSeconds(getDifferenceInSeconds(ticketInfoFromLS.expiredTime))
    }
  }, [])

  useEffect(() => {
    if (remainingSeconds === null || checkoutStepId === BOOK_TICKET_STEP.SHOW_TICKET_INFO) return
    if (!remainingSeconds) {
      dispatch(setIsShowPopUp(true))
      dispatch(
        setPopUpContent({
          ...EXPIRED_TICKET_TIME,
          link: `${path.movie.replace(':id', ticketInfo?.film?.filmInfo?.id)}`
        })
      )
      removeTicketInfoFromLocalStorage()
    }
    const interval = setInterval(() => {
      setRemainingSeconds((prevSeconds) => {
        if (prevSeconds <= 0) {
          clearInterval(interval)
          return 0
        }
        return prevSeconds - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [remainingSeconds, dispatch, ticketInfo, checkoutStepId])

  const {
    film: { filmInfo: { filmName, ageRate } = {} } = {},
    cinemaShow: { name: cinemaName = '', address = '' } = {},
    showtime: { timeStart = '', dateStart = '' } = {},
    seatList = [],
    seatNames = '',
    screenName = '',
    totalPrice = 0
  } = ticketInfo

  return (
    <div className='flex w-full flex-col gap-6 rounded-sm bg-gradient-to-tr from-blue-custom-700 to-purple-custom-700 p-4'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='text-xl font-bold tracking-tighter'>{filmName}</div>
        {checkoutStepId !== BOOK_TICKET_STEP.SHOW_TICKET_INFO && (
          <div className='flex items-center gap-2 text-lg font-normal uppercase'>
            <span>Ticket holding time:</span>
            <div className='rounded-sm bg-yellow-custom-700 px-3 py-1 text-lg font-bold text-black-custom-700'>
              {getMinuteAndSecond(remainingSeconds) || '00:00'}
            </div>
          </div>
        )}
      </div>
      <div className='text-md font-medium text-yellow-custom-700'>{AGE_RATING[ageRate] || 'No limit age'}</div>
      <div className='flex flex-col gap-1'>
        <div className='text-xl font-semibold'>{cinemaName}</div>
        <div className='text-sm font-medium'>{address}</div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-sm font-medium text-yellow-custom-700'>Showtime</div>
        <div className='text-xl font-semibold'>
          {`${getHourAndMinute(timeStart)} ${getDayOfWeek(formatDate(dateStart))} ${formatDate(dateStart)}`}
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-start gap-8'>
        <div className='flex flex-col gap-1'>
          <div className='text-sm font-medium text-yellow-custom-700'>Screen</div>
          <div className='text-xl font-semibold'>{screenName}</div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-sm font-medium text-yellow-custom-700'>Seat Quantity</div>
          <div className='text-xl font-semibold'>{seatList.length}</div>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-sm font-medium text-yellow-custom-700'>Seat Number</div>
        <div className='text-xl font-semibold'>{seatNames}</div>
      </div>
      <div className='flex w-full items-center justify-between border-t-[2px] border-dashed border-white-custom-700 py-2'>
        <div className='text-xl font-medium uppercase text-yellow-custom-700'>Total</div>
        <div className='text-2xl font-bold uppercase'>{formatPrice(totalPrice) || 0} VND</div>
      </div>
    </div>
  )
}
