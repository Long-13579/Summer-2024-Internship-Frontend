import { forwardRef, useEffect, useRef, useState } from 'react'
import ImgScreen from '@/assets/images/img-screen.png'
import Seat from '@/components/Seat'
import SeatLegendItem from '@/components/SeatLegendItem'
import SingleSeat from '@/assets/images/seat-single.svg?react'
import { useDispatch, useSelector } from 'react-redux'
import { setScreenName, setSeatPrice } from '@/redux/slices/bookTicket'
import { getShowInfo } from '@/apis/show'

const SeatingMap = forwardRef((_, ref) => {
  const { selectedShowtime } = useSelector((state) => state.bookTicket)
  const [seats, setSeats] = useState(null)
  const tableRef = useRef(null)
  const [tableWidth, setTableWidth] = useState('auto')
  const dispatch = useDispatch()

  const fetchShowInfo = async (showId) => {
    const response = await getShowInfo(showId)
    if (response) {
      const { seatMatrix, screen, price } = await getShowInfo(showId)
      setSeats(JSON.parse(seatMatrix).data)
      dispatch(setScreenName(screen.name))
      dispatch(setSeatPrice(price))
    }
  }

  useEffect(() => {
    fetchShowInfo(selectedShowtime.id)
  }, [selectedShowtime])

  useEffect(() => {
    if (tableRef.current) {
      setTableWidth(tableRef.current.offsetWidth + 'px')
    }
  }, [seats])

  return (
    <div className='mt-10 pb-10' ref={ref}>
      <h1 className='w-full text-center text-3xl font-bold uppercase'>
        Select Seats - Screen {selectedShowtime.screenId}
      </h1>
      <div className='relative mx-auto mt-10' style={{ width: tableWidth }}>
        <img src={ImgScreen} alt='screen' />
        <h4 className='absolute left-1/2 top-[6px] -translate-x-1/2 text-xl font-bold tracking-wider'>Screen</h4>
      </div>
      <table ref={tableRef} className='mx-auto mt-3'>
        <tbody>
          {seats &&
            seats?.map((seatRow) => (
              <tr key={seatRow.rowName}>
                <td key={seatRow.rowName} className='px-1 py-[3px]'>
                  <div className='flex min-h-[30px] w-full min-w-[40px] items-center justify-center text-lg font-bold'>
                    {seatRow.rowName}
                  </div>
                </td>
                {seatRow.rowSeats.map((seat) => {
                  return (
                    <td key={`${seat.colId}-${seat.seatId}`} className='px-1 py-[3px]' colSpan={1}>
                      <Seat seat={seat} />
                    </td>
                  )
                })}
              </tr>
            ))}
        </tbody>
      </table>
      <div className='mt-10 flex w-full items-center justify-between'>
        <SeatLegendItem icon={SingleSeat} className='h-[30px] w-[40px]' label='Regular Seat' />
        <SeatLegendItem icon={SingleSeat} className='h-[30px] w-[40px] filter-yellow-custom' label='Selected Seat' />
        <SeatLegendItem icon={SingleSeat} className='h-[30px] w-[40px] filter-blue-custom' label='Held Seat' />
        <SeatLegendItem icon={SingleSeat} className='h-[30px] w-[40px] filter-dark-gray-custom' label='Booked Seat' />
      </div>
    </div>
  )
})

export default SeatingMap
