import React, { useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const MySwal = withReactContent(Swal);
  const idInput = document.getElementById('id')
  const passwordInput = document.getElementById('#password')
  const newDiv = document.createElement('div')
  const inCorrect = document.createTextNode("Email or Password incorrect")
  
  const showLoginBox = () => {
    MySwal.fire({
      title: `Hello, ${email} :)`,
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor: "orange",
      confirmButtonText: "Close",
      showClass: {
        popup: "animate__animated animate__fadeInDownBig",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutDownBig",
      },
    });
  };

  const showRegisterBox = () => {
    MySwal.fire({
      title: "Sign Up Successfully",
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor: "orange",
      confirmButtonText: "Close",
      showClass: {
        popup: "animate__animated animate__fadeInDownBig",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutDownBig",
      },
    });
  };

  const userSignIn = (e) => {    
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)    
    .then((userCredential) => {
      showLoginBox()
      console.log(userCredential)
    }).catch((error) => {
      alert("Email or Password incorrect or not exists.")
      console.log(error)
    })      
  }

  const userSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)    
      showRegisterBox()
    }).catch((error) => {
      alert("This email is exists.")
      console.log(error)
    }) 
  }

  return (
      <>
        <form onSubmit={userSignIn} className='flex flex-col justify-center'>
          <input id="email" className="bg-slate-100 border-b-4 rounded m-2 mb-5 hover:bg-white" type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
          <input id="password" className="bg-slate-100 border-b-4 rounded m-2 mb-5 hover:bg-white" autoComplete="false" type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
          <div className='flex justify-center'>
            <button className="m-5 bg-orange-500 w-32 h-10 border-box rounded cursor-pointer hover:text-slate-800" onClick={userSignIn} type="submit">Sign In</button>
            <button className="m-5 bg-orange-500 w-32 h-10 border-box rounded cursor-pointer hover:text-slate-800" onClick={userSignUp} type="submit">Sign Up</button>
          </div>
        </form>
      </>
  )
}

export default Login
