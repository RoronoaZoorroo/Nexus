import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../src/components/Logo'

const login = () => {
  return (
    <>
      <div className='flex justify-center h-screen items-center'>
        <div className='w-[34vw] h-[66vh] bg-zinc-500 rounded-l-md'>
          <img src="" alt="" />
        </div>
        <div className='w-[34vw] h-[66vh] bg-zinc-700 flex flex-col justify-center items-center space-y-6 rounded-r-md'>
          <div className='h-[65%] w-[70%] py-6 border-2 border-amber-50 flex flex-col space-y-1 place-items-center rounded-sm'>
            <Logo color="white"/>
            <form action="" className='flex flex-col space-y-4'>
              <input className='w-60 bg-white rounded-sm py-1.5 px-2 border-2 outline-none' type="text" placeholder='Username or Email'/>
              <input className='w-60 bg-white rounded-sm py-1.5 px-2 border-2 outline-none' type="password" name="" id="" placeholder='Password'/>
              <button className='w-60 bg-white rounded-sm py-1.5 cursor-pointer font-semibold' type="submit">Login</button>
            </form>
            <Link className='text-white' to="/forgotPassword">forgot password?</Link>
          </div>
          <div className='h-[16%] w-[70%] border-2 border-amber-50 flex justify-center items-center text-white rounded-sm'>
          <span>Don't have an account?<Link className='text-sky-400' to="/signup">Sign up</Link></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default login