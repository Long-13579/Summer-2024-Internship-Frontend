import IconLocation from '@/assets/images/ic-location.svg?react'
import IconCalendar from '@/assets/images/ic-calendar.svg?react'
import MultiLevelSelect from '@/components/MultiLevelSelect'
import { Link } from 'react-router-dom'
import { RIGHT_NAVBAR } from './constants'
import { useEffect, useState } from 'react'
import { getCinemasOfProvinces } from '@/apis/province'

export default function Menu() {
  const [cinemas, setCinemas] = useState([])

  const fetchCinemasOfProvinces = async () => {
    const cinemasOfProvinces = await getCinemasOfProvinces()
    setCinemas(cinemasOfProvinces)
  }

  useEffect(() => {
    fetchCinemasOfProvinces()
  }, [])

  return (
    <nav className='fixed left-0 right-0 top-[var(--header-user-height)] z-50 h-[var(--menu-height)] bg-main text-white'>
      <div className='mx-auto my-0 flex h-full max-w-container items-center px-[20px]'>
        <div className='flex h-full w-full items-center justify-between border-t-[2px] border-gray-custom-700'>
          <div className='flex h-full items-center gap-7 text-white'>
            <MultiLevelSelect
              icon={IconLocation}
              title='Select Province/City'
              listItem={cinemas}
              subItemName='cinemas'
            />
            <Link to='/' className='flex h-full items-center gap-1 hover:cursor-pointer hover:text-yellow-custom-700'>
              <IconCalendar />
              <span>Showtimes</span>
            </Link>
          </div>
          <div className='flex items-center gap-7'>
            {RIGHT_NAVBAR.map((element) => (
              <Link
                to={element.path}
                key={element.name}
                className='underline underline-offset-5 hover:cursor-pointer hover:text-yellow-custom-700'
              >
                {element.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
