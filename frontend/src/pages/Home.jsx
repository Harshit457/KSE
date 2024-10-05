import React from 'react'
import ShineBorder from '../components/Shineborder'
import Navbar from '../components/Navbar'
import css3 from "../assets/css3.svg"
import html5 from "../assets/html5.svg"
import js from "../assets/javascript.svg"
import node from "../assets/nodejs.svg"
import python from "../assets/python.svg"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"
import Card from '../components/Card'
function Home() {
  return (
    <div className='h-full w-full overflow-hidden'>
    <div className=' text-gray-300 h-screen  w-screen overflow-hidden '  >
     <Navbar></Navbar>
     <div className=' bg-zinc-900 h-screen flex justify-around  w-screen   ' >
          <div className=' pt-28 '>
              <div className='font-bold text-5xl   '>Grow your Skills</div>
              <div className='font-bold text-5xl mt-8 '>Unlock New Skills, Share Your</div>
              <div className='font-bold text-5xl mt-3 '>Expertise</div>
              <div className='font-semibold  text-2xl mt-12 '>
                Learn from others,teach what you know. Join <br /> a community of learners and experts <br /> exchanging Knowledge.
              </div>
              <br /><br /><br />
              <div>
                <a href="Signup" className='h-12  hover:bg-blue-950  hover:text-white flex justify-center items-center w-32 text-2xl text-black font-bold bg-slate-100 rounded-2xl'>Join us</a>

              </div>


          </div>
          <div className='flex bg-cyan-900  flex-wrap w-1/3 h-2/3 mt-20 rounded-full   pl-12 pt-4  '>
            <ShineBorder  children={css3} ></ShineBorder>
            <ShineBorder children={html5} ></ShineBorder>
            <ShineBorder children={js} ></ShineBorder>
            <ShineBorder children={node} ></ShineBorder>
            <ShineBorder children={python} ></ShineBorder>
            <ShineBorder children={react} ></ShineBorder>
            <ShineBorder children={tailwind} ></ShineBorder>
            <ShineBorder children={react} ></ShineBorder>
            <ShineBorder children={tailwind} ></ShineBorder>
            </div>
     </div>
    </div>
    <div className=' pt-20 bg-cyan-900 '>
      <div className='items-center flex justify-center text-5xl text-blue-300 font-semibold'>Our Best Services</div> <br /><br /><br />
      <div className='flex justify-evenly '>
      <Card heading={"Web Development"}  description={"Build websites that inspire! Share your web development skills and learn from experts in real-time."} ></Card>
      <Card heading={"App Development"} description={"Build applications that inspire! Share your android development skills and learn from experts in real-time."}></Card>
      <Card heading={"Machine Learning"} description={"Build Machine that inspire! Share your machine learning skills and learn from experts in real-time."}></Card>
      <Card heading={"UI/UX"} description={"Build UI that inspire! Share your UI/UX skills and learn from experts in real-time."}></Card>
      </div>
      <br /><br />
     </div>



     <div >

     <footer className="bg-stone-900 border-t-2 border-gray-600 text-gray-300 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding Section */}
        <div>
          <h2 className="text-5xl font-bold text-gray-300 flex items-center">
          <div className='relative  flex w-20 h-16 items-center'>
            <div className='w-10 h-10 border-2 border-blue-500 bg-slate-100 rounded-full absolute left-2  transform -translate-x-0'></div>
            <div className='w-10 h-10 bg-blue-500 rounded-full absolute left-8 top-4  transform translate-x-0'></div>
          </div>
            E-Skill
          </h2>
          <br />
          <p className="mt-2 text-3xl">Enhance your skills</p><br />
          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-3">
            <a href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6 fill-current text-gray-500 hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.787-1.75-1.75s.784-1.75 1.75-1.75 1.75.787 1.75 1.75-.784 1.75-1.75 1.75zm12.5 10.268h-3v-4.969c0-2.971-4-2.738-4 0v4.969h-3v-9h3v1.422c1.396-2.586 7-2.777 7 2.48v5.098z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-6 h-6 fill-current text-gray-500 hover:text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0c3.181 0 3.584.012 4.849.07 1.206.056 2.057.248 2.544.418a5.085 5.085 0 011.832 1.144 5.082 5.082 0 011.144 1.832c.17.487.362 1.338.418 2.544.058 1.266.07 1.669.07 4.849s-.012 3.584-.07 4.849c-.056 1.206-.248 2.057-.418 2.544a5.092 5.092 0 01-1.144 1.832 5.085 5.085 0 01-1.832 1.144c-.487.17-1.338.362-2.544.418-1.266.058-1.669.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.056-2.057-.248-2.544-.418a5.083 5.083 0 01-1.832-1.144 5.082 5.082 0 01-1.144-1.832c-.17-.487-.362-1.338-.418-2.544-.058-1.266-.07-1.669-.07-4.849s.012-3.584.07-4.849c.056-1.206.248-2.057.418-2.544a5.085 5.085 0 011.144-1.832 5.085 5.085 0 011.832-1.144c.487-.17 1.338-.362 2.544-.418 1.266-.058 1.669-.07 4.849-.07zm0-2c-3.261 0-3.666.013-4.947.071-1.273.058-2.143.253-2.89.522a7.076 7.076 0 00-2.61 1.56 7.08 7.08 0 00-1.56 2.61c-.269.747-.464 1.617-.522 2.89-.058 1.281-.071 1.686-.071 4.947s.013 3.666.071 4.947c.058 1.273.253 2.143.522 2.89a7.08 7.08 0 001.56 2.61 7.083 7.083 0 002.61 1.56c.747.269 1.617.464 2.89.522 1.281.058 1.686.071 4.947.071s3.666-.013 4.947-.071c1.273-.058 2.143-.253 2.89-.522a7.08 7.08 0 002.61-1.56 7.084 7.084 0 001.56-2.61c.269-.747.464-1.617.522-2.89.058-1.281.071-1.686.071-4.947s-.013-3.666-.071-4.947c-.058-1.273-.253-2.143-.522-2.89a7.084 7.084 0 00-1.56-2.61 7.084 7.084 0 00-2.61-1.56c-.747-.269-1.617-.464-2.89-.522-1.281-.058-1.686-.071-4.947-.071z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.241a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-6 h-6 fill-current text-gray-500 hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557a9.864 9.864 0 01-2.828.775 4.92 4.92 0 002.165-2.723 9.862 9.862 0 01-3.127 1.195 4.912 4.912 0 00-8.367 4.482c-4.083-.205-7.702-2.158-10.125-5.134a4.822 4.822 0 00-.666 2.475 4.902 4.902 0 002.188 4.083 4.872 4.872 0 01-2.225-.616v.062a4.91 4.91 0 003.946 4.806 4.9 4.9 0 01-2.217.084 4.916 4.916 0 004.593 3.414 9.856 9.856 0 01-6.102 2.102c-.396 0-.787-.023-1.175-.068a13.894 13.894 0 007.548 2.212c9.054 0 14.01-7.504 14.01-14.01 0-.213-.005-.426-.014-.637a10.004 10.004 0 002.457-2.548z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6 fill-current text-gray-500 hover:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.388 10.953 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.634c0-3.022 1.793-4.688 4.533-4.688 1.312 0 2.684.235 2.684.235v2.953h-1.511c-1.489 0-1.951.926-1.951 1.877v2.257h3.328l-.532 3.469h-2.796v8.385c5.737-.901 10.125-5.863 10.125-11.854z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-300">Resources</h2><br />
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline text-xl">Home</a></li>
            <li><a href="#" className="hover:underline text-xl">Help</a></li>
            <li><a href="#" className="hover:underline text-xl">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-300">Contact Us</h2><br />
          <p className="mt-2 text-xl">+22 3426538824</p>
          <p className='text-xl'>abcd@gmail.com</p>
        </div>

        {/* Become an Instructor */}
        <div>
          <h2 className="text-2xl font-bold text-gray-300">Become an Instructor</h2> <br />
          <p className="mt-2 text-xl">Best platform to enhance skills</p>
          <a href="#" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Register Now
          </a>
        </div>
      </div>
      <br /><br /><br />
    </footer>

     </div>
    </div>
  )
}

export default Home
