import "./NavBar.css"
import logo from "../images/logo.png"; 
import { GithubIcon, LinkedinIcon } from "../images/svgIcons";

const NavBar = () => {
    return(
        <div className="nav_container">
            <div className="left">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="center">
                <span>Home</span>
                <span>About</span>
                <span>Sevices</span>
                <span>Work</span>
                <span>Contact</span>
            </div>
            <div className="right">
                <LinkedinIcon className="linkedin" onClick={() => window.open("https://www.linkedin.com/in/edward-yuabov/", "_blank")}/>
                <GithubIcon className="github" onClick={() => window.open("https://github.com/EddieYuabov", "_blank")}/>
            </div>
        </div>
    )
}

export default NavBar