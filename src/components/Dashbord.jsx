import React from 'react'

function Dashbord() {
  return (
   <>
   <div className='p-4 shadow-md font-serif' >
      <div className='flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-around'>
        <div className='flex flex-col items-center'>
            <div className='lg:text-3xl text-2xl text-gray-600'>Project</div>
            <div className='lg:text-3xl text-2xl text-gray-800 font-bold'>4+</div>
        </div>
        <div className='flex flex-col items-center'>
            <div className='lg:text-3xl text-2xl text-gray-600'>Experience</div>
            <div className='lg:text-3xl text-2xl text-gray-800 font-bold'>0</div>
        </div>
        <div className='flex flex-col items-center'>
            <div className='lg:text-3xl text-2xl text-gray-600'>Intership</div>
            <div className='lg:text-3xl text-2xl text-gray-800 font-bold'>0</div>
        </div>
     
      </div>
   </div>
   </>
  )
}

export default Dashbord
