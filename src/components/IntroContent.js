import "./IntroContent.css"
import Loading from "./Loading"

const IntroContent = () => {

    return(
        <div className="intro_content">
            <div className="top_content">
                <Loading/>
                <div className="title">
                    <span className="main">EDWARD YUABOV</span>
                    <span className="description">FRONTEND ENGINEER</span>
                </div>
            </div>
            <div className="bottom_content">
                <div className="header">
                    <span>Some of my latest work</span>
                </div>
                <div className="project_container">
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                </div>
            </div>
        </div>
    )
}
export default IntroContent