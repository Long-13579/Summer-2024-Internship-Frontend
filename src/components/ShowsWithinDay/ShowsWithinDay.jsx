import IconArrowUp from '@/assets/images/ic-arrow-up.svg?react'
import IconArrowDown from '@/assets/images/ic-arrow-down.svg?react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { formatDate, getHourAndMinute, isCurrentTimeGreaterThan } from '@/utils/datetime'
import { useNavigate, useParams } from 'react-router-dom'
import { path } from '@/routes/path'

export default function ShowsWithinDay({ filmId, showTime }) {
  const navigate = useNavigate()
  const params = useParams()
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpanded = () => setIsExpanded(!isExpanded)

  const handleSelectShowtime = (show) => {
    navigate(`${path.film.replace(':id', filmId)}?cinemaId=${params.id}&showId=${show.id}`)
  }

  return (
    <div className='w-full overflow-hidden rounded-sm border border-white-custom-700'>
      <div
        className='flex w-full items-center justify-between p-2 text-sm font-medium hover:cursor-pointer'
        onClick={toggleExpanded}
      >
        <span>Date: {formatDate(showTime.dateStart)}</span>
        {isExpanded ? (
          <IconArrowUp className='h-[20px] w-[20px] min-w-[20px]' />
        ) : (
          <IconArrowDown className='h-[20px] w-[20px] min-w-[20px]' />
        )}
      </div>
      <CSSTransition in={isExpanded} timeout={300} classNames='expand' unmountOnExit>
        <div className='px-2 pb-2'>
          <div className='text-xs font-medium uppercase'>Standard</div>
          <div className='mt-2 flex flex-wrap items-center gap-[6px]'>
            {showTime.shows.map((show) => (
              <div
                key={show.id}
                className={cn('w-[55px] rounded-sm border py-1 text-center text-sm font-medium', {
                  'border-gray-custom-500 text-gray-custom-500 hover:cursor-default': isCurrentTimeGreaterThan(
                    showTime.dateStart,
                    getHourAndMinute(show.timeStart)
                  ),
                  'border-white-custom-700 text-white-custom-700 hover:cursor-pointer hover:border-yellow-custom-700 hover:text-yellow-custom-700':
                    !isCurrentTimeGreaterThan(showTime.dateStart, getHourAndMinute(show.timeStart))
                })}
                onClick={() => handleSelectShowtime(show)}
              >
                {getHourAndMinute(show.timeStart)}
              </div>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}
