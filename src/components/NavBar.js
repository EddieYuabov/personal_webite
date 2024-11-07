import React from 'react';
import "./NavBar.css";
import logo from "../images/logo.png"; 
import { GithubIcon, LinkedinIcon } from "../images/svgIcons";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav_container">
            <div className="left">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="center">
                <Link to="/"><span className="underline">home.</span></Link>
                <Link to="/About"><span className="underline">about.</span></Link>
                <Link to="/Services"><span className="underline">services.</span></Link>
                <Link to="/Work"><span className="underline">work.</span></Link>
                <Link to="/Contact"><span className="underline">contact.</span></Link>
            </div>
            <div className="right">
                <LinkedinIcon className="linkedin" onClick={() => window.open("https://www.linkedin.com/in/edward-yuabov/", "_blank")}/>
                <GithubIcon className="github" onClick={() => window.open("https://github.com/EddieYuabov", "_blank")}/>
            </div>
        </div>
    );
}

export default NavBar;