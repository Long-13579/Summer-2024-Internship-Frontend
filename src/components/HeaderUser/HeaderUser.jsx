import Button from '@/components/Button'
import IconSearch from '@/assets/images/ic-search.svg'
import IconUser from '@/assets/images/ic-user.svg'
import HeaderLogo from '@/assets/images/header-logo.webp'

export default function HeaderUser() {
  const bookBtnInfo = {
    src: 'src/assets/images/ic-ticket.svg',
    alt: 'ticket'
  }
  return (
    <header className='fixed left-0 right-0 top-0 h-header-user z-50 bg-main px-[40px] text-white'>
      <div className='mx-auto my-0 flex h-full max-w-container items-center justify-between'>
        <div className='flex items-center gap-8'>
          <a href='/'>
          <img
            src={HeaderLogo}
            alt='logo'
            className='h-[40px] hover:cursor-pointer'
          /></a>
          <Button title='Book Now' icon={bookBtnInfo} />
        </div>
        <div className='flex items-center gap-8'>
          <div className='flex min-w-[250px] items-center gap-4 rounded-3xl bg-white px-4 py-3'>
            <input
              type='text'
              placeholder='Search movies, theaters'
              className='flex-grow border-none bg-white text-sm font-normal text-black outline-none'
            />
            <img src={IconSearch} alt='search' className='hover:cursor-pointer' />
          </div>
          <div className='group flex items-center gap-2 text-white hover:cursor-pointer'>
            <img src={IconUser} alt='user' className='h-[24px] w-[24px]' />
            <span className='text-md font-normal group-hover:text-yellow-custom-700'>Sign In</span>
          </div>
        </div>
      </div>
    </header>
  )
}
