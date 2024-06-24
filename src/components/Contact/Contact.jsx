import React from 'react'
import Button from '@/components/Button'
import { SOCIAL_LINKS, CONTACT_INFO } from '@/components/Contact/constant'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex w-full flex-grow justify-center py-16'>
      <div className='relative w-full max-w-container px-container'>
        <div className='flex w-full flex-wrap justify-between'>
          <div className='w-full md:w-1/2' data-aos='fade-up'>
            <div className='py-16'>
              <div className='text-center'>
                <h2 className='mb-6 text-4xl font-extrabold uppercase'>CONTACT US</h2>
              </div>
              <div className='flex flex-col items-center'>
                {SOCIAL_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    className={`relative z-0 mb-8 mt-8 flex max-w-md items-center justify-center text-lg text-white shadow-md`}
                    to={link.href}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={link.icon} alt={link.alt} className='relative -left-20 z-10 mr-5 h-auto w-3/4' />
                    <span
                      className={`font-anton absolute -right-20 left-2 flex h-20 flex-auto items-center justify-end text-center ${link.gradient} rounded-md pr-8 text-2xl font-extrabold leading-tight md:text-2xl`}
                    >
                      {link.text}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2' data-aos='fade-up'>
            <div className='flex flex-col gap-5 rounded-lg bg-blue-800 bg-opacity-80 p-10 text-center'>
              <h3 className='mb-5 text-3xl font-extrabold'>CONTACT INFORMATION</h3>
              <ul className='space-y-3'>
                {CONTACT_INFO.map((info, index) => (
                  <li key={index} className='flex items-center'>
                    {info.icon}
                    <Link to={info.href} className='pl-2 text-white'>
                      {info.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='mt-5'>
                <form>
                  <div className='-mx-3 mb-6 flex flex-wrap'>
                    <div className='mb-6 w-full px-3 md:mb-0'>
                      <input
                        className='mb-4 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                        type='text'
                        placeholder='Full Name'
                        required
                      />
                    </div>
                    <div className='mb-6 w-full px-3 md:mb-0'>
                      <input
                        className='mb-4 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                        type='email'
                        placeholder='Enter Email'
                        required
                      />
                    </div>
                    <div className='w-full px-3'>
                      <textarea
                        className='mb-3 block w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                        rows='10'
                        placeholder='Contact Information or Feedback'
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className='flex items-start gap-8'>
                    <Button title='SEND NOW' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
