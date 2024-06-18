import MembershipContainer from '@/components/MembershipContainer'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-primary text-white'>
      <MembershipContainer />
      <Contact />
    </div>
  )
}
