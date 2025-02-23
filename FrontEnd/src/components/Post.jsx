import React from 'react'

const Post = () => {
  return (
    <>
        {/* post header information */}

        <div className='h-[90vh] w-full flex flex-col border-2 rounded-sm'>
            <div className='h-[10vh] flex justify-between items-center px-6'>
                <div className='flex items-center space-x-3'>
                    <img className='h-12 w-12 rounded-full border-2' src="#" alt="" />
                    <div>POST Host Info</div>
                </div>
                <button className='px-6 h-10 rounded-4xl bg-sky-600 border-2 border-black text-white font-medium'>Follow</button>
            </div>

            {/* Post Content */}
            <div className='h-[82vh] border-y-2 flex flex-col'>
                <p className='pb-3 px-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eveniet quis commodi harum eum quo aperiam minima quibusdam, itaque aliquid corrupti dolorum repellendus. Consequatur nemo nam, adipisci deleniti incidunt necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <img className='h-full w-full' src="" alt="" />
            </div>

            {/* post react buttons */}
            <div className='h-[8vh] flex'>
                <span className='flex justify-center items-center w-[33.4%]'>Like</span>
                <span className='border-x-2 flex justify-center items-center w-[33.4%]'>Comment</span>
                <span className='flex justify-center items-center w-[33.4%]'>Share</span>
            </div>
        </div>
    </>
  )
}

export default Post