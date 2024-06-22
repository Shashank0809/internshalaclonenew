import React from 'react'
import logo from '../../Assets/logo.png'
import "./navbar.css"
import Sidebar from './Sidebar'
import { signInWithPopup,signOut } from 'firebase/auth';
import { auth,provider } from '../../firebase/firebase';

function Navbar() {
    const loginFunction=()=>{
        signInWithPopup(auth,provider).then((res)=>{
            console.log(res)
          
        }).catch((err)=>{
            console.log(err)
        })
    }
    const user=1;
  return (
    <div>
      <nav className='nav1'>
            <ul>
            <div className="img">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className='elem'>
                <p id='int' className=''>Internships <i  id='ico' class="bi bi-caret-down-fill"></i></p>
                <p>Jobs<i id='ico' class="bi bi-caret-down-fill"></i></p>
            </div>
            <div className='search'>
            <i class="bi bi-search"></i>
                <input type='text' placeholder='Search'></input>
            </div>
            <div className="auth">
                <button className='bt1' onClick={loginFunction}>
                    Login
                    
                </button>
                <button className='bt2'>
                    Register
                    
                </button>
            </div>
            <div className="felx mt-7 hire">
                Hire Talent
            </div>
            <div className="admin">
                <button className='bt3'>
                    Admin
                </button>
            </div>
        </ul>
      </nav>
      <Sidebar />
    </div>
  )
}

export default Navbar
