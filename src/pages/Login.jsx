import React, { useState } from 'react'

const Login = ({setIsLoggedIn}) => {

  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('setlogin')
    setIsLoggedIn(true)
  }

  const onLoginValueChange = (event) => {
    const {user, password} = event.target;
    setUser(() => {

    })
    setPassword(() => {
      
    })
  }

  const LoginForm = () => {
    setIsLoggedIn(true)
  }

  return (
      <div className='container'>
        <form onSubmit={LoginForm} className='flex flex-col'>
          <input className="bg-slate-100 border-b-4 rounded m-2 mb-5 hover:bg-white" type="text" placeholder="Email" value={user} onChange={onLoginValueChange}/>
          <input className="bg-slate-100 border-b-4 rounded m-2 mb-5 hover:bg-white" type="password" placeholder="Password" value={password} onChange={onLoginValueChange}/>
          <div className='flex justify-center'>
            <button className="m-5 bg-orange-500 w-32 h-20 border-box rounded cursor-pointer hover:text-slate-800" onClick={handleSubmit} type="submit">Login</button>
            <button className="m-5 bg-orange-500 w-32 h-20 border-box rounded cursor-pointer hover:text-slate-800" onClick={handleSubmit} type="submit">Register</button>
          </div>
        </form>
      </div>
  )
}

export default Login
