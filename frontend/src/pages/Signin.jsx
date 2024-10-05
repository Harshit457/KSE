import React, { useState } from "react";
import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Signin() {
  const navigate = useNavigate();
  const [postInputs, setpostInputs]= useState({
    email: "",
    password: ""
  })
  async function verify(){
    try{
      const response = await axios.post("http://localhost:3000/signin",postInputs);
      const jwt = response.data.jwt
      localStorage.setItem("authorization",jwt)
      console.log(jwt)
      navigate("/first")
    }catch(e){
      alert("error")
    }
  }
    return(
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        
        <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>

        
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login Here</h2>
        
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email</label>
          <input onChange={(e)=>{
            setpostInputs({
              ...postInputs,
              email: e.target.value
            })
          }}
          id="email"
            type="text"
            placeholder="Email or Phone"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Password</label>
          <input onChange={(e)=>{
            setpostInputs({
              ...postInputs,
              password: e.target.value
            })
          }}
          id="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button onClick={verify} className="w-full bg-white text-black font-bold py-3 rounded-md hover:bg-gray-300 transition duration-300">
          Log In
        </button>

        <div className="flex justify-between mt-6">
          <div className="text-gray-400">Dont Have an account? </div>
          <a href="Signup" className="flex z-50  text-gray-200"  >Signup</a>
        </div>
      </div>
    </div>

    )
}

export default Signin
