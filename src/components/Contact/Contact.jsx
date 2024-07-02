import React from 'react';
import Button from '@/components/Button';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/components/Contact/constant'; 
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className='sc-pd py-10'>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 p-4" data-aos="fade-up">
            <div className="py-16">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold uppercase mb-6">CONTACT US</h2>
              </div>
              <div className="flex flex-col items-center">
                {SOCIAL_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    className={`flex items-center justify-center z-0 mt-8 mb-8 w-full max-w-md h-36 ${link.gradient} shadow-md rounded-md text-white text-lg`}
                    to={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={link.icon} alt={link.alt} className="w-32 h-30 mr-5" />
                    <span className="flex-auto text-center font-anton font-extrabold text-lg md:text-2xl lpy-2 px-4 inline-block leading-tight">{link.text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4" data-aos="fade-up">
            <div className="bg-blue-800 bg-opacity-80 p-10 rounded-lg flex flex-col gap-5">
              <h3 className="text-3xl font-extrabold mb-5">CONTACT INFORMATION</h3>
              <ul className="space-y-3">
                {CONTACT_INFO.map((info, index) => (
                  <li key={index} className="flex items-center">
                    {info.icon}            
                      <Link to={info.href} className="text-white">
                        {info.text}
                      </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 mb-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Full Name" required />
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Enter Email" required />
                    </div>
                    <div className="w-full px-3">
                      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" rows="10" placeholder="Contact Information or Feedback" required></textarea>
                    </div>
                  </div>
                  <div className='flex items-start gap-8'><Button title='SEND NOW'/></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;