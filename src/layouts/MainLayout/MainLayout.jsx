import HeaderUser from '@/components/HeaderUser'
import UserFooter from '@/components/UserFooter'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <HeaderUser />
      <div className='mx-auto my-0 block max-w-container pt-header-user bg-main'>
        <Outlet />
      </div>
      <UserFooter />
    </>
  )
}
