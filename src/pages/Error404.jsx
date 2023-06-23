import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
    const isNavigate = useNavigate();
    const goHome = () => isNavigate('/');

  return (
    <div className='flex flex-col justify-center text-center items-center mt-80'>
      <div className='px-4 p-2 uppercase'>Error 404 not found this page.</div>
      <hr className='w-80 bg-slate-900 h-1'></hr>
      <button onClick={goHome} type="button" className='my-5 p-3 px-8 p-2 bg-slate-900 text-slate-100 hover:bg-orange-500 hover:text-slate-800 ease-in-out duration-300'>Go back to home.</button>
    </div>
  )
}

export default Error404
