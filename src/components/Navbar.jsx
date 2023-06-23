import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import logo from '../assets/alt-console-1-svgrepo-com.svg'
import Typewriter from 'typewriter-effect'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import Login from '../pages/Login'
import 'animate.css';

const Navbar = () => {
    const MySwal = withReactContent(Swal);
    const [ isLoggedin , setIsLoggedIn] = useState(null)
    const [ user, setUser] = useState([''])
    const isNavigate = useNavigate();
    const goHome = () => {
        setIsLoggedIn(false)
        isNavigate('/')
    };

    const showLoginBox = () => {
        MySwal.fire({
            title: 'LOGIN',
            html: <Login />,
            backdrop: true,
            showConfirmButton: false,
            showClass: {
              popup: 'animate__animated animate__fadeInDownBig'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutDownBig'
            }
            
          })
    };
    
    return (
        <>
        <nav className="flex sticky top-0 justify-around items-center bg-slate-900 flex-row">
            <Link to="/">
                <div className="flex border-box items-center text-slate-100 ">
                    <img src={logo}
                    className='my-5 w-24 h-12'
                    alt="logo"/>
                    <div className="w-52">
                        {/* `HELLO : ${user} 👋` */}
                    <Typewriter
                        onInit={(typewriter)=>{
                            typewriter.typeString("ARTICLE")
                            .pauseFor(1000)
                            .deleteAll()
                            typewriter.typeString(`HELLO : ${user} 👋`)
                            .start()
                        }}
                    />
                    </div>
                </div>
            </Link>
            <ul className="flex text-slate-100 space-x-10">
            <Link to="/"><li className="p-2 cursor-pointer hover:text-orange-500">Home</li></Link>
            <Link to="article"><li className="p-2 cursor-pointer hover:text-orange-500">Article</li></Link>
                {isLoggedin 
                ? <button onClick={goHome} className="bg-orange-500 w-20 border-box rounded cursor-pointer hover:text-slate-800">LOGOUT</button>
                : 
                  <button onClick={showLoginBox} className="bg-orange-500 w-20 border-box rounded cursor-pointer hover:text-slate-800">LOGIN</button>
                }                      
            </ul>
        </nav>
        </>
    )
}

export default Navbar
