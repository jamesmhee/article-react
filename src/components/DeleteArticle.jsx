import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ClipLoader } from 'react-spinners';
import { HeartIcon } from "@heroicons/react/24/solid";
import { removeData } from '../functions/functionArticle'

const DeleteArticle = ({fetchTitle, title, loading}) => {
    const MySwal = withReactContent(Swal);

    const PopUp = ()=>{
        MySwal.fire({
            title: "DELETE ARTICLE Successfully",
            backdrop: true,
            confirmButtonColor: '#ed7700',
            showConfirmButton: true,
            showClass: {
              popup: "animate__animated animate__fadeInDownBig",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutDownBig",
            },
          });
        };

    const handleRemove = async (id) => {
        try {
            removeData(id)
            .then(res=> {
                console.log("Delete article")
                fetchTitle()
                PopUp()
            })
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='flex flex-col m-10 items-center'>
        <h1 className='mb-5 text-2xl border-l-8 border-r-8 p-2 border-orange-500 rounded-[10px]'> Manage Your Article</h1>
        {loading ? 
        ( title.map((e, index)=>{
            return(
              <div  key={index} className="bg-slate-700 odd:bg-orange-400 odd:text-slate-900 rounded text-white w-11/12 xs:w-7/12 h-auto p-5 mb-5 text-left shadow-0 shadow-slate-500 ">
                <p className='mb-3 text-lg'>{e.title}</p>
                <button onClick={() => handleRemove(e._id)}>Delete</button>
                <br></br>
                <Link to={'/edit/'+ e._id}>
                  <button>Edit</button>
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
  )
}

export default DeleteArticle
