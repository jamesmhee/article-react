import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams, useNavigate } from 'react-router-dom'
import { readData, editData } from '../functions/functionArticle'

const EditArticle = ({fetchTitle}) => {
    const Params = useParams()
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate()
    const PopUp = ()=>{
        MySwal.fire({
            title: "EDIT ARTICLE Successfully",
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
    
    const [data, setData] = useState({
        title: '',
        body: '',
    })

    useEffect(()=>{
        loadData(Params.id)
    }, [])

    const loadData = async (id) => {
        readData(id)
        .then((res)=>{
            setData(res.data)
        })
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        try{
            editData(Params.id, data)
                .then(res => {
                    console.log("Edited Article")
                    PopUp()
                    fetchTitle()
                    setTimeout(()=>{
                        navigate('/user')
                    }, 2000)
                })
          } catch(error){
            console.error(error);
          }        
    }

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

  return (
    <div className='flex flex-col m-10 items-center'>
        <h1 className='mb-5 text-2xl border-l-8 border-r-8 p-2 border-orange-500 rounded-[10px]'> Edit Article</h1>
        <form id="create-article" onSubmit={handleSumbit} className='flex flex-col w-12/12 xs:w-8/12'>
          <input className="bg-slate-100 border-b-4 rounded m-2 mb-5 p-3 hover:bg-white" type="text" value={data.title} onChange={(e)=>handleChange(e)} name="title" placeholder="Article Title หัวข้อบทความ" required/>
          <textarea className="bg-slate-100 border-b-4 rounded m-2 mb-5 p-3 hover:bg-white" rows={15} value={data.body} name="body" onChange={(e)=>handleChange(e)} autoComplete="false" type="text" placeholder="Body Article บทความ" required/>
          <div className='flex justify-center'>
            <button className="m-5 bg-orange-500 w-32 h-10 transition-all border-box rounded cursor-pointer hover:text-slate-100 hover:bg-slate-700" type="submit">EDIT</button>
            <button className="m-5 bg-orange-500 w-32 h-10 transition-all border-box rounded cursor-pointer hover:text-slate-100 hover:bg-slate-700" type="cancel">DRAFT</button>
          </div>
        </form>      
    </div>
  )
}

export default EditArticle
