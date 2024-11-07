import { useEffect, useState } from "react";
import "./Work.css"
import Loading from "../components/Loading";


const Contact = () => {
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 700); 

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        // Set a timer to hide the loading screen after 2 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);
    
        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);
    return(
    <div className="about">
        {loading ? <Loading/> : null}
    <div className="grid-bg"></div>
    <div className="top_content">
        <span className={`header ${animate ? 'animate' : ''}`}>contact.</span>
        <p>let's get in touch</p>
    </div>
        <div className="content">
            
        </div>
    </div>
    )
}

export default Contact