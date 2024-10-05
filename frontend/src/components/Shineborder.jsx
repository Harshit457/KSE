import React from 'react';

export default function ShineBorder({ children }) {
  return (
    <div className=" m-2  w-32 h-32 relative grid place-items-center p-6 bg-zinc-900 text-black dark:bg-customBlue dark:text-black rounded-lg transition-transform duration-500 hover:before:scale-105 before:absolute before:inset-0 before:rounded-lg before:border-4 before:border-transparent before:hover:border-yellow-500 before:transition-colors before:duration-500">
      <img className='w-full ' src={children} alt="" />
    </div>
  );
}
