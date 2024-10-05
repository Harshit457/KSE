import React from 'react'

function Card({heading , description }) {
  return (
    <div className="rounded-xl h-80 w-1/6 text-gray-400 border-2 border-black  flex justify-center items-center flex-col bg-black shadow-green-400 shadow-2xl    ">
        <div className='flex text-blue-300 justify-center font-semibold items-center text-2xl'>{heading}</div>
        <br />
        <div className='text-xl text-blue-200 pl-2 flex items-center justify-center '>{description}</div>
    </div>
  )
}

export default Card
