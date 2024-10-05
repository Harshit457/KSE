import React from 'react'
import Signin from '../pages/Signin'
function Navbar() {
  return (
    <div>
      <div className='topdiv flex justify-between pl-14 pr-10 bg-cyan-800'>
        <div className='flex items-center w-96 '>
          <div className='relative  flex w-28 h-16 items-center'>
            <div className='w-10 h-10 border-2 border-blue-500 bg-slate-100 rounded-full absolute left-8  transform -translate-x-0'></div>
            <div className='w-10 h-10 bg-blue-500 rounded-full absolute left-14 top-4  transform translate-x-0'></div>
          </div>
          <div className='text-6xl font-bold text-blue-950'>
            E-Skill
          </div>
        </div>
        <div className='flex  justify-center items-center'>
          <a href="" className='ml-3 font-semibold hover:bg-blue-800 hover:text-white flex items-center rounded-2xl justify-center w-24 mr-3 h-9 text-xl'>Home</a>
          <a href="Signin" className='ml-1 font-semibold hover:bg-blue-800 hover:text-white flex items-center rounded-2xl justify-center w-24 mr-3 h-9 text-xl'>Sign in</a>
          <a href="" className='ml-1 font-semibold hover:bg-blue-800 hover:text-white flex items-center rounded-2xl justify-center w-24 mr-3 h-9 text-xl'>Help</a>
          <a href="" className='ml-1 font-semibold hover:bg-blue-800 hover:text-white flex items-center rounded-2xl justify-center w-24 mr-3 h-9 text-xl'>About Us</a>
          <a href="" className='ml-1 font-semibold hover:bg-blue-800 hover:text-white flex items-center rounded-2xl justify-center w-24 mr-3 h-9 text-xl'>Profile</a>
          <a href="Signup" className='ml-1 mr-3 h-9 text-xl rounded-2xl bg-blue-800 w-28 flex justify-center items-center  text-white'>Register</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
