import Button from '@/components/Button'
import IconSearch from '@/assets/images/ic-search.svg?react'
import IconUser from '@/assets/images/ic-user.svg?react'
import IconTicket from '@/assets/images/ic-ticket.svg?react'
import HeaderLogo from '@/assets/images/header-logo.webp'
import { Link } from 'react-router-dom'
import { path } from '@/routes/path'

export default function HeaderUser() {
  return (
    <header className='fixed left-0 right-0 top-0 h-[var(--header-user-height)] bg-main text-white'>
      <div className='mx-auto my-0 flex h-full max-w-container items-center justify-between px-[20px]'>
        <div className='flex items-center gap-8'>
          <Link to={path.home}>
            <img src={HeaderLogo} alt='logo' className='h-[40px] hover:cursor-pointer' />
          </Link>
          <Button title='Book Now' icon={IconTicket} />
        </div>
        <div className='flex items-center gap-8'>
          <div className='flex min-w-[250px] items-center gap-4 rounded-3xl bg-white px-4 py-3'>
            <input
              type='text'
              placeholder='Search movies, theaters'
              className='flex-grow border-none bg-white text-sm font-normal text-black outline-none'
            />
            <IconSearch className='hover:cursor-pointer' />
          </div>
          <div className='group flex items-center gap-2 text-white hover:cursor-pointer'>
            <IconUser className='h-[24px] w-[24px]' />
            <span className='text-md font-normal group-hover:text-yellow-custom-700'>Sign In</span>
          </div>
        </div>
      </div>
    </header>
  )
}
