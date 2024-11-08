import { useEffect, useState } from "react";
import Loading from "../components/Loading"
import "./About.css"

const About = () => {
    
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 700); 

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);
    
        return () => clearTimeout(timer);
    }, []);
    return(
    <div className="about">
        {loading ? <Loading/> : null}
    <div className="grid-bg"></div>
    <div className="top_content">
        <span className={`header ${animate ? 'animate' : ''}`}>about.</span>
        <p>learn a little about me</p>
    </div>
        <div className="content">
            
        </div>
    </div>
    )
}
export default About