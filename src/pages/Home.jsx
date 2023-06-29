import React, { useState , useEffect }  from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import Typewriter from "typewriter-effect";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom'

const Home = ({title, loading}) => {

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto my-5">
        <div className="bg-gray-500 rounded text-white w-11/12 xs:w-7/12 h-auto p-3 mb-5 text-center shadow-0 shadow-slate-500">
        <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("สวัสดีครับเว็บนี้สร้างขึ้นเพื่อฝึกฝนในการพัฒนาเว็บไซต์ด้วย React , Node.js , MySQL , Tailwind CSS").pauseFor(1000).start();
              }}
            />
        </div>
        {loading ? 
        ( title.map((e, index)=>{
            return(
              <div  key={index} className="bg-slate-700 odd:bg-orange-400 odd:text-slate-900 rounded text-white w-11/12 xs:w-7/12 h-auto p-5 mb-5 text-left shadow-0 shadow-slate-500 ">
                <Link to={'/article/'+ e._id}>
                  <p className='mb-3 text-lg'>{e.title} | Read more...</p>
                </Link>
                <hr></hr>
                <p className='mt-3 mb-5 text-md truncate'>{e.body}</p>
                <p className='mt-3 text-sm'><HeartIcon className="inline-flex h-6 w-6 text-red-600 mt-auto" /> {e.like}</p>
          </div>
          )
        }))
        : 
        (<ClipLoader color="orange" />) 
        }

      </div>
    </>
  )
            
}

export default Home;