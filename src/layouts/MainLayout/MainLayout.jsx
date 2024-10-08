import HeaderUser from '@/components/HeaderUser'
import Menu from '@/components/Menu'
import UserFooter from '@/components/UserFooter'
import { Outlet } from 'react-router-dom'
import './MainLayout.css'

export default function MainLayout() {
  return (
    <>
      <HeaderUser />
      <Menu />
      <div className='mx-auto my-0 block pt-[var(--header-menu-height)]'>
        <Outlet />
      </div>
      <UserFooter />
    </>
  )
}
