import { useSelector } from 'react-redux'
import Button from '@/components/Button'
import { path } from '@/routes/path'
import { USER_INFO } from './constants'
import _ from 'lodash'

export default function UserInfoContainer() {
  const { userInfo } = useSelector((state) => state.bookTicket)

  const handleGoBackHome = () => {
    window.location.href = `${import.meta.env.VITE_WEB_URL}${path.home}`
  }

  if (!_.isEmpty(userInfo)) {
    return (
      <>
        <div className='flex w-full flex-col gap-4 rounded-lg bg-gradient-to-tl from-blue-custom-700 to-purple-custom-700 p-8 text-white-custom-700'>
          <h1 className='w-full text-center text-3xl font-bold uppercase'>User information</h1>
          {USER_INFO(userInfo).map(({ label, value }) => (
            <div className='flex flex-col gap-1'>
              <div className='text-sm font-medium text-yellow-custom-700'>{label}</div>
              <div className='text-xl font-semibold'>{value}</div>
            </div>
          ))}
        </div>
        <Button title='Go back to homepage' extraClass='mt-4' onClick={handleGoBackHome} />
      </>
    )
  }
}
