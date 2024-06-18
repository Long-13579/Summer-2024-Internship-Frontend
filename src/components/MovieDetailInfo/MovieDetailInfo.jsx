import IconPlayVideo from '@/assets/images/ic-play-video.svg?react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { checkLineClamp } from '@/utils/text'
import MovieOverlay from '@/components/MovieOverlay'
import { useDispatch } from 'react-redux'
import { toggleMovieOverlay } from '@/redux/slices/ui'
import ImageEmpty from '@/assets/images/img-empty.svg'
import { DESCRIPTION_INFO, GENERAL_INFO, LINE_COUNT } from './constants'

export default function MovieDetailInfo({ info }) {
  const dispatch = useDispatch()
  const paragraphRef = useRef(null)
  const [isLongParagraph, setIsLongParagraph] = useState(false)
  const [isExpandedParagraph, setIsExpandedParagraph] = useState(false)
  const [imageError, setImageError] = useState(false)

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
            {info && GENERAL_INFO(info).map(({ text, icon: IconComponent }, index) => {
              return (
                <li key={index} className='my-2 flex items-center gap-3 text-lg capitalize'>
                  <IconComponent className='h-[20px] w-[20px] text-yellow-custom-700' />
                  <span>{text}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-bold uppercase'>Description</h2>
          <ul className='mt-4'>
            {info && DESCRIPTION_INFO(info).map(({ label, value }, index) => (
              <li key={index} className='text-md my-2'>
                {label} {value || 'Unknown'}
              </li>
            ))}
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
          <IconPlayVideo className='h-[28px] w-[28px]' />
          <span className='text-xl font-semibold capitalize underline underline-offset-3'>Watch Trailer</span>
        </div>
        <MovieOverlay url={info?.trailer} />
      </div>
    </div>
  )
}
