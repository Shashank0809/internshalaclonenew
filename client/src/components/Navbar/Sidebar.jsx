import React,{useEffect , useState} from 'react'
import logo from '../../Assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithPopup,signOut } from 'firebase/auth';
import { auth,provider } from '../../firebase/firebase';
function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('.open-btn')) {
        closeSidebar();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [sidebarOpen]);
  const logoutFunction=()=>{
    signOut(auth)
  
}
  const user=1;
  return (
    <>
    <div className='App2 -mt2 overflow-hidden'>
    <img src={logo} alt="" srcset="" />
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <span className='cursor-pointer close-btn' onClick={closeSidebar}>
          &times;
        </span>
        {user?(
  <>
  <div className="profile">
   <Link to={"/profile"}>
   <img className='rounded-full justify-center' src={user.photo} alt="" srcset="" />
   </Link> 
    <p className=' text-center'>Profile name <span className='font-bold text-blue-500'>{user?.name}</span></p>
  </div>
  </>
  ):
  (
    <div className="auth">
    
  </div>
    ) 
  }
            <Link to="/internship">internships </Link>
    <Link to="/Jobs">Jobs  </Link>
       
       <Link to={"/"} className='small'>contact Us</Link> 
<hr />
{user?(
  <>
  <div className="addmore">
    
    {user?(
  <Link to={"/userapplication"}>
  <p>My Applications</p>
  </Link>
    ):(
      <Link to={"/register"}>
      <p>My Applications</p>
      </Link>
    )

    }

  <Link>
  
  <p>View Resume</p>
  </Link>
  <Link>
  <p>More</p>
  </Link>
  <button className='bt-log' id='bt' onClick={logoutFunction}>Logout <i class="bi bi-box-arrow-right"></i></button>
  <br />
  <br />
<button onClick={logoutFunction}>Log Out <i class="bi bi-box-arrow-right"></i></button>
  
  </div>
  </>
):
(

  
  <div className="addmore">
  <p>Register- As a Student</p>
  <p>Register- As a Employer</p>
  <br />
  <br />

  </div>
  ) 
}

    </div>
    </div>
    </>
  )
}

export default Sidebar
