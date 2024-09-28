import React from 'react'

import Navbar from '../components/Navbar'
function Home() {
  return (
    <div  style={{backgroundImage: `url(https://www.shutterstock.com/image-photo/students-life-happy-girl-holding-600nw-2486619879.jpg)`, backgroundSize: 'cover' , backgroundPosition: 'center'}} className='w-full h-screen'>
     <Navbar></Navbar>
      <div className='flex text-shadow-xl'>
      <div className='w-3/4'></div>
      <div className='text-white font-bold text-7xl ml-14  mt-28'>Empowering Students to Collaborate and Achieve Together</div>
      </div>
      <div className='flex mt-20'>
      <div className='w-2/5'></div>
      <a href='Signin' className='bg-cyan-400 w-72 text-4xl flex items-center justify-center text-white font-extrabold rounded-xl h-20'>Join Now</a>
      </div>
      <div className='flex mt-7'>
      <div className='w-2/5'></div>
      <div className='text-3xl text-white font-bold text-shadow-xl'>Join the Community and Start Collaborating Today!</div>
      </div>
    </div>
  )
}

export default Home
