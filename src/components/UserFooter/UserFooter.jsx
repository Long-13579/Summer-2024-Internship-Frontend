import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FootLogo from '@/assets/footer-logo.webp'
import Button from '@/components/Button'
import LinkList from '@/components/UserFooter/LinkList'
import IconTicket from '@/assets/images/ic-ticket.svg?react'
import {
  ACCOUNT_LINKS,
  EVENT_RENTAL_LINKS,
  MOVIE_LINKS,
  CINESTAR_LINKS,
  OTHER_SERVICES_LINKS,
  SOCIAL_LINKS
} from '@/components/UserFooter/constant'
import { getAllCinemas } from '@/apis/cinema'

const UserFooter = () => {
  const [cinemaSystemLinks, setCinemaSystemLinks] = useState([])

  useEffect(() => {
    const fetchAllCinemas = async () => {
      const cinemaSystemLinks = await getAllCinemas()
      setCinemaSystemLinks(cinemaSystemLinks)
    }
    fetchAllCinemas()
  }, [])

  return (
    <div className='w-full bg-gradient-to-r from-purple-700 to-blue-500 px-4 py-10 text-white'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap'>
        <div className='w-full md:w-1/3'>
          <Link to='/' className='mx-auto mb-6 block' aria-label='The logo of Cinestar'>
            <img width='170' height='60' sizes='(max-width: 768px) 50vw 100vw' src={FootLogo} alt='Cinestar logo' />
          </Link>
          <div className='mb-5 text-left text-lg'>
            <p>BE HAPPY, BE A STAR</p>
          </div>
          <div className='flex items-center gap-8'>
            <Button title='Book Now' icon={IconTicket} link='/film' />
          </div>
          <div className='justify-left mt-4 flex'>
            {SOCIAL_LINKS.map((socialLink, index) => (
              <Link
                key={index}
                to={socialLink.href}
                target='_blank'
                rel='noopener noreferrer'
                className='mr-2 transform transition-transform hover:-translate-y-1'
              >
                {socialLink.icons}
              </Link>
            ))}
          </div>
        </div>
        <div className='mt-5 w-full md:mt-0 md:w-1/3'>
          <div className='flex flex-wrap'>
            <LinkList title='Account' links={ACCOUNT_LINKS} />
            <LinkList title='Event Rental' links={EVENT_RENTAL_LINKS} />
          </div>
          <div className='mt-5 flex flex-wrap'>
            <LinkList title='Movies' links={MOVIE_LINKS} />
            <LinkList title='Cinestar' links={CINESTAR_LINKS} />
          </div>
        </div>
        <div className='mt-5 w-full md:mt-0 md:w-1/3'>
          <div className='flex flex-wrap'>
            <LinkList title='Other Services' links={OTHER_SERVICES_LINKS} />
            {cinemaSystemLinks.length > 0 && <LinkList title='Cinema System' links={cinemaSystemLinks} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserFooter
