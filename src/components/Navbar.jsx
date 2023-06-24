import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import logo from '../assets/alt-console-1-svgrepo-com.svg'
import Typewriter from 'typewriter-effect'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import Login from '../pages/Login'
import 'animate.css';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = (props) => {
    const MySwal = withReactContent(Swal);
    const [ isLoggedIn , setIsLoggedIn] = useState(null)
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
        <div className=''>
        <nav className="flex sticky xs:sticky p-0 justify-start xs:justify-center relative xs:static items-center bg-slate-900">            
            <div className="flex flex-row xs:flex-row gap-24 md:gap-40 lg:gap-10 xs:gap-64 row-gap-20 items-center justify-around text-slate-100">
                <div className='mx-5 xs:mx-0 flex items-center py-4 w-[20vw]'>
                <Link to="/">
                    <img src={logo}
                    className='h-12 mx-5 w-[100%]]'
                    alt="logo"/>
                </Link>
                    {/* `HELLO : ${user} 👋` */}
                <Typewriter
                    onInit={(typewriter)=>{
                        typewriter.typeString("ARTICLE")
                        .pauseFor(1000)
                        .start()
                    }}
                />

                </div>
                <div className='flex xs:static flex-col bg-slate-700 h-screen xs:h-0 xs:bg-inherit :items-center xs:flex-row fixed xs:static right-0 top-0 w-[50%] xs:mt-0'>
                <button>
                    <Bars3Icon className="h-6 w-6 block absolute top-7 right-3 text-orange-500 mt-auto xs:hidden" />
                </button>
                    <ul className="flex flex-col relative xs:static top-20 xs:flex-row items-center text-slate-100 gap-20">
                    <Link to="/"><li className="p-2 cursor-pointer hover:text-orange-500">Home</li></Link>
                    <Link to="article"><li className="p-2 cursor-pointer hover:text-orange-500">Article</li></Link>
                        {isLoggedIn 
                        ? <button onClick={goHome} className="bg-orange-500 w-20 border-box rounded cursor-pointer hover:text-slate-800">LOGOUT</button>
                        : 
                        <button onClick={showLoginBox} className="bg-orange-500 w-20 border-box rounded cursor-pointer hover:text-slate-800">LOGIN</button>
                        }                      
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
