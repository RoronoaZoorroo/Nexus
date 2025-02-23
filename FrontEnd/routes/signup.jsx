import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../src/components/Logo'
import Btn from '../src/components/Btn'

const signup = () => {
  return (
    <>
        <div className='h-screen w-full py-12 flex flex-col items-center justify-center space-y-4'>
            <div className='w-[30vw] h-[90vh] rounded-md border-2 flex flex-col items-center justify-between py-10 space-y-2'>
            <Logo></Logo>
            <span className='max-w-[65%]'>Sign up to see photos and videos from your friends.</span>
            <form className='flex flex-col space-y-3' action="">
                <input className='w-60 bg-white rounded-sm py-1.5 px-2 border-2 outline-none' type="text" placeholder='Mobile Number or Email'/>
                <input className='w-60 bg-white rounded-sm py-1.5 px-2 border-2 outline-none' type="password" name="" id="" placeholder='Password'/>
                <input className='w-60 bg-white rounded-sm py-1.5 px-2 border-2 outline-none' type="text" placeholder='Full Name'/>
                <input className='w-60 bg-white rounded-sm py-1.5 px-2 border-2 outline-none' type="text" placeholder='Username'/>
            </form>
            <span className='max-w-[70%] text-sm'>People who use our service may have uploaded your contact information to Instagram. <a href="">Learn More</a></span>
            <span className='max-w-[70%] text-sm'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</span>
            <Btn name="Sign Up"/>
            </div>
            <div className='w-[30vw] border-2 py-4 flex justify-center items-center rounded-md'>Have an account?<Link to="/">Login</Link></div>
            
        </div>
    </>
  )
}

export default signup