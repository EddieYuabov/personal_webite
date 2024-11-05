import "./NavBar.css"
import logo from "../images/logo.png"; 
import { GithubIcon, LinkedinIcon } from "../images/svgIcons";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="nav_container">
            <div className="left">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="center">
                <Link to="/"><span>Home</span></Link>
                <Link to="/About"><span>About</span></Link>
                <Link to="/Services"><span>Sevices</span></Link>
                <Link to="/Work"><span>Work</span></Link>
                <Link to="/Contact"><span>Contact</span></Link>
            </div>
            <div className="right">
                <LinkedinIcon className="linkedin" onClick={() => window.open("https://www.linkedin.com/in/edward-yuabov/", "_blank")}/>
                <GithubIcon className="github" onClick={() => window.open("https://github.com/EddieYuabov", "_blank")}/>
            </div>
        </div>
    )
}

export default NavBar