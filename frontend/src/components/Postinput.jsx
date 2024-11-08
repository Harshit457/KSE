import React from "react";
import axios from "axios";
function Postinput() {
  const sendreq = async (
    Developmentid,
    Creditofferingid,
    Descriptionid,
    mailid,
    requirementsid
  ) => {
    const Development = document.getElementById(Developmentid).value;
    const Creditoffering = document.getElementById(Creditofferingid).value;
    const Description = document.getElementById(Descriptionid).value;
    const mail = document.getElementById(mailid).value;
    const requirements = document.getElementById(requirementsid).value;
    if (
      !Development ||
      !Creditoffering ||
      !Description ||
      !mail ||
      !requirements
    ) {
      alert("fill all the details");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(mail)) {
      alert("Please enter a valid email address.");
      return;
    }

    const postdata = {
      Development,
      Creditoffering,
      Description,
      mail,
      requirements,
    };
    const token = localStorage.getItem("authorization");
    console.log(token);
    try {
      const response = await axios.post(
        "http://localhost:3000/signin/first/post",
        postdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
      id="postinput"
      className="w-full rounded-2xl h-full  bg-blue-900 bg-opacity-90 "
    >
      <div className="text-center text-3xl text-slate-200 mt-3 ">
        Create your Post
      </div>
      <div className="flex justify-center items-center pt-5">
        <select
          id="Development"
          className={`w-3/5  px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline `}
          name="Development"
        >
          <option value="Web Developer">Web Developer</option>
          <option value="UI/UX">UI/UX Design</option>
          <option value="Android Developer">Android Development</option>
          <option value="AR/VR">AR/VR Development</option>
        </select>
      </div>

      <div className="flex justify-center items-center pt-5">
        <input
          id="Creditoffering"
          className={` w-3/5 px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline `}
          type="text"
          placeholder="Credits you want to offer"
        />
      </div>

      <div className="flex justify-center items-center pt-5">
        <input
          id="mail"
          className={` w-3/5 px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline `}
          type="email"
          placeholder="Enter your email to contact"
        />
      </div>
      <div className="flex justify-center items-center pt-5">
        <textarea
          id="Description"
          className={` w-3/5 px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline `}
          type="Description"
          placeholder="Description of your project"
        />
      </div>
      <div className="flex justify-center items-center pt-5">
        <textarea
          id="requirements"
          className={` w-3/5 px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline `}
          type="text"
          placeholder="Requirements"
        />
      </div>
      <div className="flex justify-center items-center pt-5">
        <button
          onClick={() => {
            sendreq(
              "Development",
              "Creditoffering",
              "Description",
              "mail",
              "requirements"
            );
          }}
          className="w-2/5 bg-neutral-800 text-slate-200 h-10 rounded-xl"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default Postinput;
