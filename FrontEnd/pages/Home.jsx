import React from 'react'
import Post from '../src/components/Post'
import MessageDialogBox from '../src/components/MessageDialogBox'
import Suggestions from '../src/components/Suggestions'
import ProfileBox from '../src/components/ProfileBox'
// import SingleMszBox from '../src/components/SingleMszBox'


const Home = () => {
  return (
    <div className='h-screen w-full flex space-x-3 px-3 py-2'>
        <div className='h-full w-[22%] space-y-2'>
          {/* Message */}
          <MessageDialogBox />

          {/* otherbox */}
          <Suggestions />
        </div>

        <main className='w-[55%] h-full flex flex-col space-y-3 rounded-sm overflow-y-scroll scroll-smooth scrollbar-hidden'>
          
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        
        </main>

        <ProfileBox />
    </div>
    
  )
}

export default Home