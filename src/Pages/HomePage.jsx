import React from 'react'
import Homelayout from '../layouts/Homelayout'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
  <>
  <Homelayout>
   <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
  <div className="w-1/2 space-y-6">
    <h1 className="text-5xl font-semibold leading-tight">
      Find Out Best{" "}
      <span className="text-yellow-500 font-bold">
        Online Courses
      </span>
    </h1>
<p className='text-xl text-gray-200'>
    We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost 
</p>
<div className='space-x-6'>
    <Link to= "/courses">
   <button className='bg-yellow-500 px-5 py-3 rounded-md font-semibold
   text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'> 
    Explore Courses</button>
    </Link>
      <Link to= "/contact">
   <button className='px-5 py-3 font-semibold border border-yellow rounded-md
   text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-600'> 
    Contact Us</button>
    </Link>

</div>
  </div>
  <div className='w-1/2 flex items-center justify-center'>
    <img src="https://th.bing.com/th/id/OIP.Cl-F43SGRMfNXT19QyCtPAHaEc?w=284&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="homepage image" />

  </div>

    </div>
  </Homelayout>
  </>
  )
}

export default HomePage