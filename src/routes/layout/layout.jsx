import "./layout.scss"
import Navbar from "../../components/navbar/Navbar"
import { Outlet } from "react-router-dom"
export default function Layout(){
   return  <div className="layout">
        <div className="navbar">
            <Navbar/>
            <div className="content">
                <Outlet />
            </div>
        </div>
    </div>
}