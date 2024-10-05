import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Profile() {
  const [userdata, setuserdata] = useState({
    FirstName: '',
    LastName: '',
    Branch: '',
    Section: '',
    about: '',
    credits: 0,
    Username: ''
  });
  
  const { Username } = useParams();
  
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authorization');  // Retrieve token from localStorage

      if (!token) {
        console.error("No token found in localStorage.");
        return;
      }
      console.log(token)
      try {
        const response = await axios.get(`http://localhost:3000/first/profile/${Username}`, {
          headers: {
            authorization: `${token}`  // Include token in the request headers
          }
        });
        console.log(response.data)
        // Set the user data in the state
        setuserdata({
          FirstName: response.data.FirstName,
          LastName: response.data.LastName,
          Branch: response.data.Branch,
          Section: response.data.Section,
          about: response.data.about,
          credits: response.data.credits,
          Username: response.data.Username,
          email: response.data.email
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchProfile();  // Fetch the user profile data when the component mounts
  }, [Username]);
  function Opengmail(){
    const email = userdata.email
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(mailtoLink, '_blank');
  }
  return (
    <div>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button id='email' onClick={Opengmail}
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span id='credits' className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                         {userdata.credits}
                        </span>
                        <span className="text-sm text-gray-500">Credits</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span id='Username' className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {userdata.Username}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="flex justify-center items-center text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    <div id='FirstName'>{userdata.FirstName}</div>
                    <div id='LastName' className='ml-2'>{userdata.LastName}</div>
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    KIET Group Of Institutions
                  </div>
                  <div className="justify-center items-center mb-2 text-gray-700 mt-10 flex">
                    <div id='branch' className='text-gray-700'>{userdata.Branch}-</div>
                    <div id='section' className='text-gray-700'>{userdata.Section}</div>
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    KIET Group Of Institutions
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p id='About' className="mb-4 text-lg leading-relaxed text-gray-800">
                        {userdata.about}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
