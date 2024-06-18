import IconTag from '@/assets/images/ic-tag.svg'
import IconClock from '@/assets/images/ic-clock.svg'
import IconMessage from '@/assets/images/ic-message.svg'
import IconPersonCheck from '@/assets/images/ic-person-check.svg'
import IconPlayVideo from '@/assets/images/ic-play-video.svg'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { checkLineClamp } from '@/utils/text'
import { formatDate } from '@/utils/datetime'
import MovieOverlay from '../MovieOverlay/MovieOverlay'
import { useDispatch } from 'react-redux'
import { toggleMovieOverlay } from '@/redux/slices/ui'
import { AGE_RATING } from '@/constants/movie'
import ImageEmpty from '@/assets/images/img-empty.svg'

export default function MovieDetailInfo({ info }) {
  const dispatch = useDispatch()
  const paragraphRef = useRef(null)
  const [isLongParagraph, setIsLongParagraph] = useState(false)
  const [isExpandedParagraph, setIsExpandedParagraph] = useState(false)
  const [imageError, setImageError] = useState(false)
  const LINE_COUNT = 4

  const handleShowMovieOverlay = () => {
    dispatch(toggleMovieOverlay())
  }

  const handleLoadImageError = () => {
    setImageError(true)
  }

  useEffect(() => {
    setIsLongParagraph(checkLineClamp(paragraphRef.current, LINE_COUNT))
  }, [info])

  return (
    <div className='flex gap-6'>
      <div className='flex min-w-[450px] max-w-[450px]'>
        <div className='w-full'>
          <img
            src={!info?.poster || imageError ? ImageEmpty : info?.poster}
            alt='poster'
            onError={handleLoadImageError}
            className={cn('w-full rounded-lg shadow-sm', {
              'border border-gray-custom-800': info?.poster && !imageError
            })}
          />
        </div>
      </div>
      <div className='flex-grow'>
        <div>
          <h1 className='text-3xl font-bold uppercase'>{info?.filmName}</h1>
          <ul className='mt-4'>
            <li className='my-2 flex items-center gap-3 text-lg capitalize'>
              <img src={IconTag} alt='genre' className='h-[20px] w-[20px] text-yellow-custom-700' />
              <span>{info?.category}</span>
            </li>
            <li className='my-2 flex items-center gap-3 text-lg capitalize'>
              <img src={IconClock} alt='time' className='h-[20px] w-[20px] text-yellow-custom-700' />
              <span>{info?.duration}'</span>
            </li>
            <li className='my-2 flex items-center gap-3 text-lg capitalize'>
              <img src={IconMessage} alt='sub' className='h-[20px] w-[20px] text-yellow-custom-700' />
              <span>Subtitle: {info?.language || 'No subtitle'}</span>
            </li>
            <li className='my-2 flex items-center gap-3 text-lg capitalize'>
              <img src={IconPersonCheck} alt='age' className='h-[20px] w-[20px] text-yellow-custom-700' />
              <span>{AGE_RATING[info?.ageRate] || 'No limit age'}</span>
            </li>
          </ul>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-bold uppercase'>Description</h2>
          <ul className='mt-4'>
            <li className='text-md my-2'>Director: {info?.director}</li>
            <li className='text-md my-2'>Cast: {info?.actor}</li>
            <li className='text-md my-2'>Release Date: {formatDate(info?.dateStart)}</li>
            <li className='text-md my-2'>End Date: {formatDate(info?.dateEnd)}</li>
          </ul>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-bold uppercase'>Movie Plot</h2>
          <p
            ref={paragraphRef}
            className={cn('mt-4 leading-relaxed', {
              [`line-clamp-${LINE_COUNT}`]: isLongParagraph && !isExpandedParagraph
            })}
          >
            {info?.description}
          </p>
          {isLongParagraph && (
            <div
              className='mt-4 inline-block text-xs underline underline-offset-2 hover:cursor-pointer hover:text-yellow-custom-700'
              onClick={() => setIsExpandedParagraph((prev) => !prev)}
            >
              {isExpandedParagraph ? 'Collapse' : 'Read more'}
            </div>
          )}
        </div>
        <div
          className='gap mt-6 flex items-center gap-2 hover:cursor-pointer hover:text-yellow-custom-700'
          onClick={handleShowMovieOverlay}
        >
          <img src={IconPlayVideo} alt='icon' className='h-[28px] w-[28px]' />
          <span className='text-xl font-semibold capitalize underline underline-offset-3'>Watch Trailer</span>
        </div>
        <MovieOverlay url={info?.trailer} />
      </div>
    </div>
  )
}
