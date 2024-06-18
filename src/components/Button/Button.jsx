import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function Button({
  title,
  icon: IconComponent,
  extraClass = '',
  imgClass = '',
  txtClass = '',
  link = '',
  ...rest
}) {
  return (
    <Link to={link}>
      <div
        className={cn(
          'group relative flex items-center justify-center gap-2 overflow-hidden rounded-md bg-yellow-custom-700 px-4 py-2 text-black transition-colors duration-1000 ease-in-out hover:cursor-pointer hover:text-white',
          extraClass
        )}
        {...rest}
      >
        {IconComponent && (
          <IconComponent
            className={cn('transition-filter z-10 h-7 duration-500 ease-in-out group-hover:invert', imgClass)}
          />
        )}
        <span className={cn('ml-sm z-10 text-lg font-bold uppercase group-hover:text-white', txtClass)}>{title}</span>
        <span className='z-1 absolute inset-0 rounded-md bg-yellow-custom-700 transition-transform duration-500 ease-in-out group-hover:translate-x-0'></span>
        <span className='z-2 absolute inset-0 -translate-x-full transform rounded-md bg-gradient-to-r from-purple-custom-700 to-blue-custom-700 transition-transform duration-500 ease-in-out group-hover:translate-x-0'></span>
      </div>
    </Link>
  )
}
