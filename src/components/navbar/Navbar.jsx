import { useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";
export default function Navbar(){
    const [open,setopen] = useState(false);
    const user = true;

    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                <img src="/logo.png" alt="" />
                <span>Hosteler</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Agents</Link>
            </div>

            <div className="right">
            {user?
            <div className="user">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <Link to="/profile" className="profile">
                <div className="notification">3</div>
                Profile</Link>
            </div>:
            <>
            <Link to="/">Sign in</Link>
            <Link to="/" className="register">Sign up</Link>
            </>}    
            <div className="menuIcon" >
                <img src="/public/menu.png" alt="" onClick={()=>{setopen(o=>!o)}}/>
            </div>
            <div className={open ? "menu active":"menu"}>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Agents</Link>
                <Link to="/">Sign in</Link>
                <Link to="/">Sign up</Link>
            </div>
            </div>
        </nav>
    );
}