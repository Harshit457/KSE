import React from 'react'
import Signin from '../pages/Signin'
function Navbar() {
  return (
    <div>
      <div className="flex flex-row w-full justify-around text-white font-bold   text-3xl text-shadow-2xl">
        <div >Studee</div>
        <div className='text-4xl'>Unlock Skills, Exchange Credits, Elevate Success</div>
        <a href='Signin' className='flex items-center justify-center text-shadow-2xl text-sm mt-2 w-28    bg-cyan-400 text-bold rounded-md' >Login</a>
      </div>
    </div>
  )
}

export default Navbar
