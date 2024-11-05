import "./IntroContent.css"
import Loading from "./Loading"
import CarvoySS from "../images/CarvoyAppScreenshot.jpg"; 
import OneUpWebsiteSS from "../images/1upWebsiteScreenshot.png"; 
import GeneralAssemblySS from "../images/GeneralAssemblyScreenshot.png"; 

const IntroContent = () => {

    return(
        <div className="intro_content">
            <div className="top_content">
                {/* <Loading/> */}
                <div className="title">
                    <span className="main">EDWARD YUABOV</span>
                    <span className="description">WEB DEVELOPER & UX DESIGNER</span>
                </div>
            </div>
            <div className="bottom_content">
                <div className="header">
                    <span>Some of my latest work</span>
                </div>
                <div className="project_container">
                    <div className="project">
                        <img src={CarvoySS}/>
                    </div>
                    <div className="project">
                        <img src={OneUpWebsiteSS}/>
                    </div>
                    <div className="project">
                    <img src={GeneralAssemblySS}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IntroContent