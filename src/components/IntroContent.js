import "./IntroContent.css"
import Loading from "./Loading"
import CarvoySS from "../images/CarvoyAppScreenshot.jpeg"; 
import OneUpWebsiteSS from "../images/1upWebsiteScreenshot.png"; 
import GeneralAssemblySS from "../images/GeneralAssemblyScreenshot.png"; 
import { useState, useEffect } from 'react';

const IntroContent = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const projects = [CarvoySS, OneUpWebsiteSS, GeneralAssemblySS];

    const getPosition = (index) => {
        if (index === currentIndex) return 'active';
        if (index === (currentIndex - 1 + projects.length) % projects.length) return 'prev';
        return 'next';
    };

    const handleClick = (index) => {
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [isPaused]);

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
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className={`project ${getPosition(index)}`}
                            onMouseEnter={() => !isTransitioning && setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => !isTransitioning && handleClick(index)}
                            style={{ cursor: isTransitioning ? 'default' : 'pointer' }}
                        >
                            <img src={project} alt={`Project ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="navigation-dots"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {projects.map((_, index) => (
                        <div 
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => !isTransitioning && handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default IntroContent