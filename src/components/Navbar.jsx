import { faWix } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-fit'>
      <div className='flex justify-between p-2'>
        <section className='flex gap-7'>
          <div className='flex justify-center items-center px-2'>
          <FontAwesomeIcon className='h-14' icon={faWix} />
          </div>
          <div className='hover:text-red-800 flex justify-center items-center'>Creation</div>
          <div className='hover:text-red-800 flex justify-center items-center' >Business</div>
          <div className='hover:text-red-800 flex justify-center items-center'>Growth</div>
          <div className='hover:text-red-800 flex justify-center items-center'>Resources</div>
          <div className='flex justify-center items-center'>|</div>
          <div className='hover:text-red-800 flex justify-center items-center'>Enterprise</div>
          <div className='hover:text-red-800 flex justify-center items-center'>Pricing</div>
          <div className='hover:text-red-800 flex justify-center items-center'>Support</div>
        </section>
        <div className='flex gap-9 justify-between'>
          <div className='flex items-center justify-center'>
          <FontAwesomeIcon className=' flex justify-center items-center h-4 p-2' icon={faGlobe} />
          </div>
          <button className='border border-blue-500 rounded-full px-10 p-1 hover:border-blue-300 hover:text-blue-300 text-blue-500'>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar