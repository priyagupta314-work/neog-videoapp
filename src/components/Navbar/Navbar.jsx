import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
export default function Navbar(){
    return(
        <div className="Navbar">
            <NavLink to="/" end activeStyle={{borderBottom: "2px solid rgb(171, 216, 157)", fontWeight: "bold"}} className="navlink">Home</NavLink>
            <NavLink to="/Playlists" activeStyle={{borderBottom: "2px solid rgb(171, 216, 157)", fontWeight: "bold"}} className="navlink">My Playlists</NavLink>
            <NavLink to="/History" activeStyle={{borderBottom: "2px solid rgb(171, 216, 157)", fontWeight: "bold"}} className="navlink">History</NavLink>
        </div>
    )
}