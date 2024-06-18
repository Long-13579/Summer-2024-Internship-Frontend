import MembershipBackground from '@/assets/images/bg-cfriends.webp'
import MembershipCard from '@/components/MembershipCard'
import { MEMBERSHIP_TITLE, MEMBERSHIP_TYPE } from './constants'

export default function MembershipContainer() {
  return (
    <div className='relative w-full py-14'>
      <img
        src={MembershipBackground}
        alt='Background'
        className='absolute inset-0 left-0 top-0 h-full w-full object-cover blur-[2px] filter'
      />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative mx-auto max-w-container px-container'>
        <h2 className='w-full pb-8 text-center text-4xl font-semibold uppercase text-white-custom-700'>
          {MEMBERSHIP_TITLE}
        </h2>
        <div className='flex justify-between'>
          {MEMBERSHIP_TYPE.map((item) => (
            <MembershipCard key={item.title} content={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
