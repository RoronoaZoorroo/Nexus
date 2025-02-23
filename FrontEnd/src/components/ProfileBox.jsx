import React from 'react'
import Partioner from './Partioner'

const ProfileBox = () => {
  return (
    <div className='w-[22%] h-full border-2 rounded-sm py-4 space-y-6'>
          <div className='w-full flex flex-col items-center space-y-2'>
            <img className="h-20 w-20 bg-amber-700 border-2 rounded-full" src="" alt="" />
            <a className="text-xl" href="Dashboard">FullName</a>
            <span className='text-neutral-700 pb-2'>Job Title</span>
            <Partioner />
          </div>
          <div className='flex justify-evenly'>
            <div className='flex flex-col items-center'>
              <span className=' text-xl'>Posts</span>
              <span>10</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className=' text-xl'>Posts</span>
              <span>10</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className=' text-xl'>Posts</span>
              <span>10</span>
            </div>
          </div>
        </div>
  )
}

export default ProfileBox