import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import AddArticle from '../components/AddArticle'
import { ClipLoader } from 'react-spinners';
import { HeartIcon } from "@heroicons/react/24/solid";
import { readData } from '../functions/functionArticle';
import { useParams } from 'react-router-dom';


const Article = ({loading}) => {
  const [ article, setArticle ] = useState([])
  const { id } = useParams()

  useEffect(() => {
    readData(id)
    .then((res) => setArticle(res.data))
    console.log(article)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center mx-auto my-5">
    {loading ? 
        (
          <div  key={article.id} className="bg-slate-700 rounded text-white w-11/12 xs:w-7/12 h-auto p-5 mb-5 text-left shadow-0 shadow-slate-500 ">
            <p className='text-xl mb-2'>{article.title}</p>
            <hr></hr>
            <p className='mt-3 mb-5 text-md truncate'>{article.body}</p>
            <button>          
              <p className='text-sm'><HeartIcon className="inline-flex h-6 w-6 text-red-600 mt-auto" /> {article.like}</p>
            </button>
      </div>
      )
    : 
    (<ClipLoader color="orange" />) 
    }

  </div>
  )
}

export default Article
