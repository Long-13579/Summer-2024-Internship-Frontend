import MembershipContainer from '@/components/MembershipContainer'
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <MembershipContainer />
      <Contact/>
    </div>
  )
}
