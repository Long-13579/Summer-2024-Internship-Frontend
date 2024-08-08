import TimeCard from '@/components/TimeCard'
import CinemaShow from '@/components/CinemaShow'
import IconLocation from '@/assets/images/ic-location.svg?react'
import IconMovie from '@/assets/images/ic-movie.svg?react'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { getCinemaShowOfFilm } from '@/apis/show'
import { useDispatch } from 'react-redux'
import { clearShowtime, setSelectedFilm } from '@/redux/slices/bookTicket'

const ShowTime = forwardRef(({ film }, ref) => {
  const dispatch = useDispatch()
  const [isShowList, setIsShowList] = useState(false)
  const [selectedProvinceCity, setSelectedProvinceCity] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [cinemaShows, setCinemaShows] = useState([])

  const listRef = useRef(null)

  const toggleShowList = () => {
    setIsShowList(!isShowList)
  }

  const handleClickOutside = (event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setIsShowList(false)
    }
  }

  const handleChangeProvinceCity = (provinceCityId) => {
    if (provinceCityId !== selectedProvinceCity) {
      setSelectedProvinceCity(provinceCityId)
      dispatch(clearShowtime())
    }
  }

  const fetchCinemaShowOfFilm = async (filmId, date, provinceId) => {
    const cinemaShowOfFilm = await getCinemaShowOfFilm(filmId, date, provinceId)
    setCinemaShows(cinemaShowOfFilm)
  }

  useEffect(() => {
    dispatch(setSelectedFilm(film))
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    dispatch(setSelectedFilm(film))

    if (film) {
      const { dateList, provinceList } = film

      if (dateList && dateList.length > 0) {
        setSelectedDate(dateList[0])
      }

      if (provinceList && provinceList.length > 0) {
        setSelectedProvinceCity(provinceList[0])
      }
    }
  }, [film])

  useEffect(() => {
    fetchCinemaShowOfFilm(film?.filmInfo?.id, selectedDate, selectedProvinceCity?.id)
  }, [selectedDate, selectedProvinceCity])

  return (
    <div className='p-20' ref={ref}>
      <div className='py-10'>
        <h1 className='w-full text-center text-3xl font-bold uppercase'>Showtime</h1>
        <div className='mt-6 flex w-full flex-wrap items-center justify-center gap-3'>
          {film?.dateList?.map((date) => (
            <TimeCard key={date} time={date} isSelected={date === selectedDate} setSelectedDate={setSelectedDate} />
          ))}
        </div>
      </div>
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h1 className='z-10 text-3xl font-bold uppercase'>Cinema list</h1>
          <div
            className='relative z-10 flex w-[200px] max-w-[200px] items-center gap-2 rounded-md border border-yellow-custom-700 px-3 py-2 text-yellow-custom-700 hover:cursor-pointer'
            onClick={toggleShowList}
            ref={listRef}
          >
            <IconLocation className='h-[24px] w-[24px]' />
            <span className='text-md line-clamp-1 overflow-hidden font-semibold uppercase'>
              {selectedProvinceCity?.name}
            </span>
            <div
              className={cn('absolute left-0 top-full z-10 mt-1 w-full rounded-sm bg-white-custom-700 p-1', {
                hidden: !isShowList
              })}
            >
              <ul>
                {film?.provinceList?.map((province) => (
                  <li
                    key={province.id}
                    className={cn(
                      'text-md rounded-sm px-2 py-1 capitalize text-black-custom-700 hover:cursor-pointer',
                      {
                        'bg-blue-custom-100': province.id === selectedProvinceCity?.id,
                        'bg-white-custom-700 hover:bg-gray-custom-100': province.id !== selectedProvinceCity?.id
                      }
                    )}
                    onClick={() => handleChangeProvinceCity(province)}
                  >
                    {province.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-4 flex flex-col gap-4'>
          {(!cinemaShows || cinemaShows.length === 0) && (
            <div className='flex items-center gap-4 rounded-sm bg-gray-custom-500 px-6 py-5 text-xl font-semibold text-white-custom-700'>
              <IconMovie className='h-[28px] w-[28px]' />
              <span>There are currently no movies showing at this location</span>
            </div>
          )}
          {cinemaShows && cinemaShows.map((cinemaShow) => <CinemaShow key={cinemaShow.id} cinemaShow={cinemaShow} />)}
        </div>
      </div>
    </div>
  )
})

export default ShowTime
