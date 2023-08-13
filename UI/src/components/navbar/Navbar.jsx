import React, { useEffect, useState } from 'react';
import {Link, useLocation , useNavigate} from 'react-router-dom';
import "./Navbar.css"
import newRequest from '../../utils/NewRequest';


const Navbar = () => {

    const [active,setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    
    const isActive = ()=>{
        window.scrollY>0 ? setActive(true) : setActive(false)
    }
    useEffect (()=>{
        window.addEventListener("scroll",isActive)

        return()=>{
            window.removeEventListener("scroll",isActive)
        }
    },[])
    const navigate = useNavigate();
    const handleLogout = async()=>{
      try {
        await newRequest.post("/auth/logout")
        localStorage.setItem("currentUser", null );
        navigate("/")
        console.log("logout Sucessful")
      } catch (error) {
        console.log(error)
      }
    }
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));


    return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className='container'>
            <div className='logo'>
                <Link to="/" className="link">
                <span className='text'>SkillLancer</span>
                
                <span className='dot'>.</span>
                </Link>
            </div>
            <div className='links'>
                <Link className="link">Business</Link>
                <Link className="link">Explore</Link>
                <Link className="link">English</Link>
                <Link to='/login' className="link">Sign in</Link>
                {!currentUser?.isSeller &&<span>Become a seller</span>}
                {!currentUser && <Link className="link" to="/register">
                <button>Join</button>
              </Link>}
                {currentUser && (
                    <div className="user" onClick={() => setOpen(!open)}>
                        <img src={currentUser.img || "./img/noavatar.jpg"} alt="" />
                        <span>{currentUser?.username}</span>
                        {open && (
                        <div className='options'>
                            {currentUser?.isSeller &&(
                                <>
                                <Link className='link' to="/myGigs">Gigs</Link>
                                <Link className='link' to="/add">Add New Gig</Link>
                                
                                </>
                            )}
                            <Link className='link' to="/orders">Orders</Link>
                            <Link className='link' to="/messages">Messages</Link>
                            <Link className='link' onClick={handleLogout}>Logout</Link>

                        </div>
                        
                        )}
                    </div>
                )}
            </div>
        </div>
        {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
            Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
            Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
            Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
            Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
            Photography
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
            AI Services
            </Link>
          </div>
          <hr />
        </>
      )}
        </div>
  )
}

export default Navbar