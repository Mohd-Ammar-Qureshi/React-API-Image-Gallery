import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom';


const Section = () => {

  const [UserData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData= async ()=>{
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
  }

  useEffect(()=>{
    getData()
  },[index])

  let PrintUserData = <h3 className='text-center text-gray-900 font-bold text-xl p-5'>Loading...</h3>
  if(UserData.length > 0){
    PrintUserData = UserData.map(function(user, idx){
      return (
        <div key={user.id} className=''>
          <a href={user.url} target='_blank' rel='noreferrer'>
            <div className='w-48 h-48 m-3 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'>
             <img src={user.download_url} alt={user.author} className='w-full h-full object-cover '/>          
          </div>
          <h2 className='text-center font-bold text-gray-900'>{user.author}</h2>
          </a>
        </div>
      )
    })
  }
  return (
        <div className='w-full h-screen pt-4 bg-gray-300 rounded-lg overflow-auto'>
          <div
          
           className='flex flex-wrap justify-center items-center'>
              {PrintUserData}
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">

  {/* Prev Button */}
  <button
    onClick={() => index > 1 && setIndex(index - 1)}
    disabled={index === 1}
    className={`px-5 py-2 rounded-full font-medium 
    ${index === 1 
      ? "bg-gray-400 cursor-not-allowed text-white" 
      : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300  shadow-md cursor-pointer"}`}
  >
    ◀ Prev
  </button>

  {/* Page Indicator */}
  <div className="flex items-center gap-2 
  bg-white shadow-lg 
  px-6 py-2 rounded-full">

    <span className="text-gray-500 text-sm font-medium">
      Page
    </span>

    <span className="bg-blue-500 text-white 
    px-4 py-1 rounded-full 
    font-semibold shadow-md">
      {index}
    </span>

  </div>

  {/* Next Button */}
  <button
    onClick={() => setIndex(index + 1)}
    disabled={index >= 100}
    className={`px-5 py-2 rounded-full font-medium 
    ${index < 83 ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-md" : "bg-gray-400 text-white cursor-not-allowed"}`}
  >
    Next ▶
  </button>
</div>
</div> 
)}

export default Section
