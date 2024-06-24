import FBIcon from '@/assets/ct-1.webp'
import ZLIcon from '@/assets/ct-2.webp'
import MailIcon from '@/assets/ct-1.svg?react'
import PhoneIcon from '@/assets/ct-2.svg?react'
import AddressIcon from '@/assets/ct-3.svg?react'

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/cinestarcinemasvietnam',
    icon: FBIcon,
    alt: 'Facebook Icon',
    text: 'FACEBOOK',
    gradient: 'bg-gradient-to-r from-purple-800 to-blue-800'
  },
  {
    href: 'https://zalo.me/2861828859391058401',
    icon: ZLIcon,
    alt: 'Zalo Icon',
    text: 'ZALOCHAT',
    gradient: 'bg-gradient-to-r from-purple-800 to-blue-800'
  }
]

const CONTACT_INFO = [
  {
    icon: <MailIcon />,
    alt: 'Mail Icon',
    href: 'mailto:marketing.cinestar@gmail.com',
    text: 'marketing.cinestar@gmail.com',
    isInternal: false
  },
  {
    icon: <PhoneIcon />,
    alt: 'Phone Icon',
    href: 'tel:028 7300 8881',
    text: '028 7300 8881',
    isInternal: false
  },
  {
    icon: <AddressIcon />,
    alt: 'Address Icon',
    href: 'https://maps.app.goo.gl/RYfzjhyyw7vn7PuV8',
    text: '135 Hai Bà Trưng, Ben Nghe Ward, District 1, HCMC',
    isInternal: false
  }
]

export { SOCIAL_LINKS, CONTACT_INFO }
