import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from 'axios'
import { addData } from '../functions/functionArticle'

const AddArticle = ({fetchTitle}) => {
    const MySwal = withReactContent(Swal);
    const [ form, setForm ] = useState({})
    const createarticle = document.getElementById('create-article');

    const handleChange = (e) =>{
        console.log(e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const PopUp = ()=>{
        MySwal.fire({
            title: "CREATE ARTICLE Successfully",
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

    const handleSumbit = async (e) => {
        e.preventDefault();
        try{
            addData(form)
                .then(res => {
                    console.log("Added Article")
                    fetchTitle();
                    createarticle.reset()
                    PopUp()
                })
          } catch(error){
            console.error(error);
          }        
    }

  return (
    <div className='flex flex-col m-10 items-center'>
        <h1 className='mb-5 text-2xl border-l-8 border-r-8 p-2 border-orange-500 rounded-[10px]'> Create Article</h1>
        <form id="create-article" onSubmit={handleSumbit} className='flex flex-col w-12/12 xs:w-8/12'>
          <input className="bg-slate-100 border-b-4 rounded m-2 mb-5 p-3 hover:bg-white" type="text" onChange={(e)=>handleChange(e)} name="title" placeholder="Article Title หัวข้อบทความ" required/>
          <textarea className="bg-slate-100 border-b-4 rounded m-2 mb-5 p-3 hover:bg-white" rows={15} name="body" onChange={(e)=>handleChange(e)} autoComplete="false" type="text" placeholder="Body Article บทความ" required/>
          <div className='flex justify-center'>
            <button className="m-5 bg-orange-500 w-32 h-10 transition-all border-box rounded cursor-pointer hover:text-slate-100 hover:bg-slate-700" type="submit">CREATE</button>
            <button className="m-5 bg-orange-500 w-32 h-10 transition-all border-box rounded cursor-pointer hover:text-slate-100 hover:bg-slate-700" type="submit">DRAFT</button>
          </div>
        </form>      
    </div>
  )
}

export default AddArticle
