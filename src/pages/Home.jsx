import React, { useState , useEffect }  from 'react'
import { ClipLoader } from 'react-spinners';
import Typewriter from "typewriter-effect";

const Home = (props) => {
  const [ title, setTitle ] = useState([]);
  const [ article, setArticle ] = useState([]); 
  const [ comment, setComment ] = useState([]);
  const [ loading, setLoading ] = useState(false)

  const fetchTitle = async ()=>{
    try{
      await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setTitle(posts))
      setLoading(true)
    } catch(error){
      console.error(error);
    }
  }

  const fetchComment = async ()=>{
    try {
      await fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(comments => setComment(comments))
    } catch (error){
      console.error(error)
    }
  }


  useEffect(() => {
    fetchTitle()
    fetchComment()
  }, [])


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
        ( title.map((e)=>{
            return(
              <div  key={e.id} className="bg-slate-700 odd:bg-orange-400 odd:text-slate-900 rounded text-white w-11/12 xs:w-7/12 h-auto p-5 mb-5 text-left shadow-0 shadow-slate-500 ">
                <p className='mb-3'>{e.title}</p>
                <hr></hr>
                <p className='mt-3'>{e.body}</p>
            {/* {comment.map((c)=>{
            return(
              <div key={c.id} className="text-slate-500">
                <p>{c.body}</p>
              </div>
            )
          })} */}
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