import React from 'react'
import { Link } from 'react-router-dom'

const LinkList = ({ title, links }) => {
  return (
    <div className='w-1/2 p-2'>
      <div className='mb-2 text-xl font-bold uppercase'>{title}</div>
      <ul className='list-none p-0'>
        {links.map((link, index) => (
          <li key={index} className='mb-2'>
            <Link
              className='text-white no-underline hover:text-yellow-custom-700'
              to={link.href || `/cinema/${link.id}`}
            >
              {link.text || link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinkList
