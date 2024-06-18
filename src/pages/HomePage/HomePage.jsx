import React from 'react'
import SlideAdvertisement from '@/components/SlideAdvertisement'
import Contact from '@/components/Contact'
import MembershipContainer from '@/components/MembershipContainer'
import SlideFilmContainer from '@/components/SlideFilmContainer'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-primary text-white'>
      <SlideAdvertisement />
      <SlideFilmContainer />
      <MembershipContainer />
      <Contact />
    </div>
  )
}
