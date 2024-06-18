import React from 'react'
import Button from '@/components/Button'
import { SOCIAL_LINKS, CONTACT_INFO } from '@/components/Contact/constant'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className='sc-pd py-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full p-4 md:w-1/2' data-aos='fade-up'>
            <div className='py-16'>
              <div className='text-center'>
                <h2 className='mb-6 text-4xl font-extrabold uppercase'>CONTACT US</h2>
              </div>
              <div className='flex flex-col items-center'>
                {SOCIAL_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    className={`z-0 mb-8 mt-8 flex h-36 w-full max-w-md items-center justify-center ${link.gradient} rounded-md text-lg text-white shadow-md`}
                    to={link.href}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={link.icon} alt={link.alt} className='h-30 mr-5 w-32' />
                    <span className='font-anton lpy-2 inline-block flex-auto px-4 text-center text-lg font-extrabold leading-tight md:text-2xl'>
                      {link.text}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full p-4 md:w-1/2' data-aos='fade-up'>
            <div className='flex flex-col gap-5 rounded-lg bg-blue-800 bg-opacity-80 p-10'>
              <h3 className='mb-5 text-3xl font-extrabold'>CONTACT INFORMATION</h3>
              <ul className='space-y-3'>
                {CONTACT_INFO.map((info, index) => (
                  <li key={index} className='flex items-center'>
                    {info.icon}
                    <Link to={info.href} className='text-white'>
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
