import React , { useState, useEffect }from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import './index.css'
import Article from './pages/Article'
import Users from './pages/Users'
import EditArticle from './components/EditArticle'
import { getData } from './functions/functionArticle'

function App() {
  const [ title, setTitle ] = useState([]);
  const [ comment, setComment ] = useState([]);
  const [ loading, setLoading ] = useState(false)

  const fetchTitle = async ()=>{
    try{
      getData()
        .then((res) => setTitle(res.data))        
        setLoading(true)
    } catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTitle()
  }, [])

  return (
    <>
      <BrowserRouter>
      <div className="scroll-smooth">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home title={title} loading={loading}/>} />
          <Route exact path="article/:id" element={<Article loading={loading}/>} />
          <Route exact path="edit/:id" element={<EditArticle fetchTitle={fetchTitle}/>} />
          <Route exact path="user" element={<Users fetchTitle={fetchTitle} title={title} loading={loading}/>} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
