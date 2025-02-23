import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../src/components/Btn'
import Partioner from '../src/components/Partioner'
import Logo from '../src/components/Logo'



const forgotPassword = () => {
  return (
    <>
      <div className='h-screen overflow-hidden'>
        <nav className='pt-4 px-36 flex justify-between border-b-2'>
          <Logo></Logo>
          <ul className='flex gap-4'>
            <li><Link to="/"><Btn name="Login" /></Link></li>
            <li><Link to="/"><Btn name="SignUp" /></Link></li>
          </ul>
        </nav>
        <div className='h-screen w-full py-12 flex justify-center '>
          <div className='w-[30vw] h-[75vh] rounded-md border-2 flex flex-col items-center justify-between pt-10 space-y-2'>
            <img className='h-32 w-32 p-4 border-2 rounded-full' src=".\src\assets\lock.svg" alt="" />
            <div className='flex flex-col items-center'>
              <span className='text-2xl font-semibold'>Trouble logging in?</span>
              <span className='max-w-[80%]'>Enter your email, phone, or username and we'll send you a link to get back into your account.</span>
            </div>
            <div className='flex flex-col items-center py-2'>
              <form action="" className='flex flex-col space-y-4'>
                  <input className='w-60 bg-white border-2 rounded-sm py-1.5 px-2 outline-none' type="text" placeholder='Username or Email'/>
                  <button className='w-60 bg-white rounded-sm py-1.5 cursor-pointer font-semibold border-2' type="submit">Login</button>
              </form>
              <Link to="/forgotPassword">Can't reset your password?</Link>
              <span className='flex items-center py-1.5 gap-2 font-medium'><Partioner />OR<Partioner /></span>
              <Link to="/signup">Create new account</Link>
            </div>
            <Link className='border-t-2 py-4 flex justify-center items-center w-full font-medium' to="/">Back to login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default forgotPassword