import React from 'react'
import Part1 from './Part1'
import { Outlet,Link } from 'react-router-dom'

const NewSection = () => {
  return (
  <div className="w-full min-h-screen text-gray-700 bg-gray-200 p-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4eWHxnDdjV8jYfslRZ62wL7YKB-1E5le2A&s')] bg-cover bg-center">
    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-center mb-8">Welcome to Our Gallery</h1>
    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-center mb-8 mt-10">Discover a world of art and creativity</p>
    <div className='flex gap-8 absolute bottom-10 left-1/2 transform -translate-x-1/2'>
       <Link to='Part1'>Part1</Link>
       <Link to='Part2'>Part2</Link>
    </div>
     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
      &copy; 2024 Gallery. All rights reserved.
    </div>
    <Outlet/>
 </div>
  )
}

export default NewSection