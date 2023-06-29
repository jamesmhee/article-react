import React from 'react'
import { Link } from 'react-router-dom'
import AddArticle from '../components/AddArticle'

const Article = () => {
  return (
    <div className='flex m-5 p-5 justify-center items-center'>
        <div className='flex bg-slate-500 p-5 w-8/12 justify-between items-center'>
            <p className='text-3xl'>บทความ</p>
            <Link to="/user"><button className='text-3xl'>create post</button></Link>
        </div>
    </div>
  )
}

export default Article
