import React from 'react'

const Article = (props) => {
  return (
    <div className='flex m-5 p-5 justify-center items-center'>
        <div className='flex bg-slate-500 p-5 w-8/12 justify-between items-center'>
            <p className='text-3xl'>All Articles</p>
            <button className='text-3xl'>create post</button>
        </div>
    </div>
  )
}

export default Article
