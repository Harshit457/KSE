import React ,{useState ,useEffect} from 'react'
import Postinput from './Postinput'
import { NavLink } from 'react-router-dom';
function Firstnav({username}) {
  console.log(username)
  const [inputting, setinputs] =useState(false)
  
  return (
    <div className='overflow-hidden'    >
      <div className='topdiv flex justify-between pl-14 pr-10 bg-cyan-800 '>
        <div className='flex items-center w-72 '>
          <div className='relative  flex w-28 h-16 items-center'>
            <div className='w-10 h-10 border-2 border-blue-500 bg-slate-100 rounded-full absolute left-8  transform -translate-x-0'></div>
            <div className='w-10 h-10 bg-blue-500 rounded-full absolute left-14 top-4  transform translate-x-0'></div>
          </div>
          <div className='text-5xl font-bold text-blue-950'>
            E-Skill
          </div>
        </div>
        <div className='flex  justify-center items-center w-2/5'>
            <input type="text" className='w-full rounded-2xl h-8 bg-slate-200 p-2' />
            <a href="http://localhost:5173/first">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 ml-2' x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
</svg>
            </a>
        </div>
        
        <div className='flex  justify-center items-center'>
          <button onClick={()=>{
            setinputs(!inputting)
          }} className='ml-1 font-semibold bg-zinc-800 text-slate-300 flex items-center rounded-2xl justify-center w-24 mr-3 h-9 text-xl'>Post</button>
          <NavLink to={`/signin/first/profile/${username}`} className='ml-1 font-semibold bg-zinc-800 text-slate-300 flex items-center rounded-2xl justify-center w-24 mr-3 h-9 text-xl'>Profile</NavLink>
        </div>
      </div>
      {inputting && (
      <div className="absolute  left-1/2 transform -translate-x-1/2 w-2/3 h-4/5  p-5 rounded shadow-lg">
        <Postinput />
      </div>
    )}
    </div>
    
  )
}

export default Firstnav
