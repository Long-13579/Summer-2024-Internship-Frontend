import { useEffect, useRef, useState } from 'react'
import ImgScreen from '@/assets/images/img-screen.png'
import Seat from '@/components/Seat'
import SeatLegendItem from '@/components/SeatLegendItem'
import SingleSeat from '@/assets/images/seat-single.svg?react'
import seatApi from '@/apis/seat.api'
import { useSelector } from 'react-redux'
import { getSelectedShowtime } from '@/redux/slices/bookTicket'

export default function SeatingMap() {
  const selectedShowtime = useSelector(getSelectedShowtime)
  const [seats, setSeats] = useState(null)
  const tableRef = useRef(null)
  const [tableWidth, setTableWidth] = useState('auto')

  useEffect(() => {
    async function fetchSeatData() {
      try {
        const data = await seatApi.getSeatByShow()
        setSeats(data.data)
      } catch (error) {
        console.error('Error fetching seat data:', error)
      }
    }

    fetchSeatData()
  }, [])

  useEffect(() => {
    if (tableRef.current) {
      setTableWidth(tableRef.current.offsetWidth + 'px')
    }
  }, [seats])

  return (
    <div className='mt-10 pb-10'>
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
}
