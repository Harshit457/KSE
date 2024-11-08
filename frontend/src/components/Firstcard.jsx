import React, { forwardRef } from "react";

// Using forwardRef to allow the component to accept a ref
const Firstcard = forwardRef(
  ({ Development, Creditoffering, Description, mail, requirements }, ref) => {
    // Define a function inside Firstcard
    function Opengmail() {
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`;
      window.open(mailtoLink, "_blank");
    }

    return (
      <div
        ref={ref}
        className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-3 h-96 bg-black flex-wrap border-8 rounded-3xl border-cyan-800"
      >
        <div className="w-full h-2/5 flex justify-center items-center mt-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
            className="bg-purple-400 w-2/6 h-4/5 rounded-full"
          ></img>
        </div>
        <div className="h-3/5 p-5">
          <div className="flex justify-between">
            <div>
              <div className="text-xl text-slate-200 font-semibold">
                {Development}
              </div>
              <div className="text-slate-200 text-lg">
                Credits Offered: {Creditoffering}
              </div>
            </div>
            <button
              onClick={Opengmail}
              className="text-lg text-blue-600 underline"
            >
              Connect
            </button>
          </div>
          <div className="mt-3 text-slate-200 text-sm">{Description}</div>
          <div className="mt-3 text-slate-200 text-sm italic ">
            Requirements: {requirements}
          </div>
        </div>
      </div>
    );
  }
);

export default Firstcard;
