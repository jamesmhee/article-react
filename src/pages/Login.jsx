import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onUserChange = (e) => {
    setUser(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const LoginForm = () => {
    // setIsLoggedIn(true)
    console.log('user logged in', user)
  }

  return (
      <>
        <form onSubmit={LoginForm} className='flex flex-col justify-center'>
          <input className="bg-slate-100 border-b-4 rounded m-2 mb-5 hover:bg-white" type="text" placeholder="Email" value={user} onChange={onUserChange} required/>
          <input className="bg-slate-100 border-b-4 rounded m-2 mb-5 hover:bg-white" autoComplete="false" type="password" placeholder="Password" value={password} onChange={onPasswordChange} required/>
          <div className='flex justify-center'>
            <button className="m-5 bg-orange-500 w-32 h-10 border-box rounded cursor-pointer hover:text-slate-800" onClick={handleSubmit} type="submit">Login</button>
            <button className="m-5 bg-orange-500 w-32 h-10 border-box rounded cursor-pointer hover:text-slate-800" onClick={handleSubmit} type="submit">Register</button>
          </div>
        </form>
      </>
  )
}

export default Login
