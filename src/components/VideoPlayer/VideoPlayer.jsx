import ReactPlayer from 'react-player'
import IconClose from '@/assets/images/ic-close.svg?react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMovieOverlay } from '@/redux/slices/ui'

export default function VideoPlayer({ url }) {
  const dispatch = useDispatch()
  const playerRef = useRef(null)

  const handleHiddenMovieOverlay = (event) => {
    event.stopPropagation()
    dispatch(toggleMovieOverlay())
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer()
      if (player && player.pauseVideo) {
        player.pauseVideo()
        player.seekTo(0)
      }
    }
  }

  return (
    <div
      className='relative z-10 flex h-full w-full items-center justify-center px-36 py-20'
      onClick={handleHiddenMovieOverlay}
    >
      <IconClose
        className='absolute right-36 top-20 mr-[-8px] mt-[-36px] h-[32px] w-[32px] hover:cursor-pointer hover:filter-light-gray-custom'
        onClick={handleHiddenMovieOverlay}
      />
      <ReactPlayer ref={playerRef} url={url} controls width='100%' height='100%' />
    </div>
  )
}
