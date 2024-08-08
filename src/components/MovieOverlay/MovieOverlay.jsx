import VideoPlayer from '@/components/VideoPlayer'
import { cn } from '@/lib/utils'
import { useSelector } from 'react-redux'
import ReactDOM from 'react-dom'

export default function MovieOverlay({ url }) {
  const { isShowMovieOverlay } = useSelector((state) => state.ui)

  return ReactDOM.createPortal(
    <div
      className={cn('fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center', {
        block: isShowMovieOverlay,
        hidden: !isShowMovieOverlay
      })}
    >
      <VideoPlayer url={url} />
      <div className='absolute left-0 top-0 z-0 h-full w-full bg-gray-custom-900 opacity-95'></div>
    </div>,
    document.body
  )
}
