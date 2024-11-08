import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const Sendreq = async (
    firstid,
    secondid,
    emailid,
    contactid,
    passwordid,
    yearid,
    skillsid,
    Branchid,
    Sectionid,
    aboutid,
    Usernameid
  ) => {
    const firstName = document.getElementById(firstid).value;
    const lastName = document.getElementById(secondid).value;
    const email = document.getElementById(emailid).value;
    const contactNo = document.getElementById(contactid).value;
    const password = document.getElementById(passwordid).value;
    const yearOfStudy = document.getElementById(yearid).value;
    const skill = document.getElementById(skillsid).value;
    const Branch = document.getElementById(Branchid).value;
    const Section = document.getElementById(Sectionid).value;
    const about = document.getElementById(aboutid).value;
    const Username = document.getElementById(Usernameid).value;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !contactNo ||
      !password ||
      !yearOfStudy ||
      !skill ||
      !Branch ||
      !Section ||
      !about ||
      !Username
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(contactNo)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }
    if (yearOfStudy < 1 || yearOfStudy > 4) {
      alert("Year of Study must be between 1 and 4.");
      return;
    }

    const userData = {
      email,
      FirstName: firstName,
      LastName: lastName,
      password,
      contactNo,
      skill,
      yearOfStudy,
      Branch,
      Section,
      about,
      Username,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/signup",
        userData
      );
      navigate(`/Signin`);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server error. Please try again later.");
      }
    }
  };
  return (
    <div
      id="Signup"
      className="flex flex-col justify-center items-center w-full h-auto  bg-[#282D2D] px-5"
    >
      <div className=" flex flex-col items-end justify-start  overflow-hidden mb-2 xl:max-w-3xl w-full">
        <div className="flex">
          <h3 className="text-white">Dark Mode : &nbsp;</h3>
          <label class="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              readOnly
            />
            <div
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
            ></div>
          </label>
        </div>
      </div>
      <div
        className={`xl:max-w-3xl ${
          darkMode ? "bg-black" : "bg-white"
        }  w-full p-5 sm:p-10 rounded-md`}
      >
        <h1
          className={`text-center text-xl sm:text-3xl font-semibold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Register for a free account
        </h1>
        <div className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="firstid"
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${
                  darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                }`}
                type="text"
                placeholder="Your first name"
              />
              <input
                id="secondid"
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                  darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                }`}
                type="text"
                placeholder="Your last name"
              />
            </div>
            <input
              id="emailid"
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="email"
              placeholder="Enter your email"
            />
            <input
              id="Usernameid"
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="text"
              placeholder="Enter your Username"
            />

            <input
              id="contactid"
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="tel"
              placeholder="Enter your phone"
            />
            <input
              id="passwordid"
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="password"
              placeholder="Password"
            />
            <input
              id="yearid"
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="text"
              placeholder="YearOfStudy"
            />
            <input
              id="Branchid"
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="text"
              placeholder="Branch"
            />
            <input
              id="Sectionid"
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="text"
              placeholder="Section"
            />
            <textarea
              id="aboutid"
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="text"
              placeholder="About"
            />
            <select
              id="skillsid"
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              name="skills"
            >
              <option value="Web Developer">Web Developer</option>
              <option value="UI/UX">UI/UX Design</option>
              <option value="Android Developer">Android Development</option>
              <option value="AR/VR">AR/VR Development</option>
            </select>
            <button
              onClick={() => {
                Sendreq(
                  "firstid",
                  "secondid",
                  "emailid",
                  "contactid",
                  "passwordid",
                  "yearid",
                  "skillsid",
                  "Branchid",
                  "Sectionid",
                  "aboutid",
                  "Usernameid"
                );
              }}
              className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3">Register</span>
            </button>
            <p className="mt-6 text-xs text-gray-600 text-center">
              Already have an account?{" "}
              <a href="signin">
                <span className="text-[#E9522C] font-semibold">Login</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
