import React from 'react'

// message box where the message senders name appear
const MsgBox = () => {
  return (
    <div className='py-2 flex justify-between items-center'>   
        <div className='flex space-x-3'>
        <img className='h-12 w-12 rounded-full border-2' src="#" alt="" />
        <div className='flex flex-col'>
            <span className='text-xl font-medium h-6'>Name</span>
            <span className='text-sm'>Message</span>
        </div>
    </div>   
    </div>
    
  )
}

export default MsgBox