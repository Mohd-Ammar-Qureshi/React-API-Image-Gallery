import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between'>
     <button className='px-6 text-lg font-bold'>|||</button>
    <div className='flex items-center justify-between py-4 px-6'>
        <div>
          <Link to='/' className='text-gray-300 font-medium hover:text-gray-500 transition-colors duration-300 mx-4'>Home</Link>
          <Link to='/Section' className='text-gray-300 font-medium hover:text-gray-500 transition-colors duration-300 mx-4'>Section</Link>
          <Link to='/Sectioncopy' className='text-gray-300 font-medium hover:text-gray-500 transition-colors duration-300 mx-4'>Infinite Scroll</Link>
        </div>
        <button className='bg-gray-50 text-black uppercase px-6 py-2 rounded-full tracking-widest text-sm'> L digital gallery platform</button>
    </div>
   </div>
  )
}

export default Navbar
