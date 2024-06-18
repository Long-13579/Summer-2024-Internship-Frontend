import Button from '@/components/Button'
import { setIsShowPopUp } from '@/redux/slices/ui'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function PopUp() {
  const { popUpContent } = useSelector((state) => state.ui)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(setIsShowPopUp(false))
    navigate(popUpContent.link)
  }

  return (
    <div className='fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center'>
      <div className='z-10 flex min-w-[300px] max-w-[400px] flex-col gap-4 rounded-lg bg-gradient-to-r from-blue-custom-700 to-purple-custom-700 p-6 text-center'>
        {popUpContent.title && <h1 className='text-2xl font-bold uppercase tracking-tight'>{popUpContent.title}</h1>}
        {popUpContent.desc && <p>{popUpContent.desc}</p>}
        <Button
          title={popUpContent.btnTitle}
          extraClass='border border-yellow-custom-700 uppercase bg-transparent text-yellow-custom-700'
          rootColorClass='bg-transparent'
          hoverColorClass='from-orange-custom-700 to-yellow-custom-700'
          onClick={handleClick}
        />
      </div>
      <div
        className='absolute left-0 top-0 z-0 h-full w-full bg-gray-custom-900 opacity-80'
        onClick={handleClick}
      ></div>
    </div>
  )
}
