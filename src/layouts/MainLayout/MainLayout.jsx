import HeaderUser from '@/components/HeaderUser'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <HeaderUser />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}
