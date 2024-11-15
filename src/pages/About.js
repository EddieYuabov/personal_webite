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

    const experience = [
        {
            year: "2023 - present",
            title: "Full-stack web & app developer",
            company: "1up"
        }, 
        {
            year: "2022 - 2023",
            title: "Front-end UI designer & developer",
            company: "General Assembly"
        },
        {
            year: "2021 - 2022",
            title: "UI developer & algorithm designer",
            company: "Carvoy"
        }
    ]

    const education = [
        {
            year: "2019 - 2023",
            title: "Bachelor of Computer Science",
            company: "Queens College"
        },
        {
            year: "2022 - present",
            title: "Software Engineering course",
            company: "Harvard University"
        }, 
        {
            year: "2021 - 2022",
            title: "Full-Stack Software immersive course",
            company: "General Assembly"
        }
    ]

    return(
    <div className="about">
        {loading ? <Loading/> : null}
    <div className="grid-bg"></div>
    <div className="top_content">
        <span className={`header ${animate ? 'animate' : ''}`}>about.</span>
        <p>learn a little about me</p>
    </div>
        <div className="content">
            <div className="experience">
            <div className="text">
                <span>experience.</span>
            </div>
                {experience.map((item, index) => (
                    <div key={index} className="cell">
                    <p>{item.year} </p>
                        <h3>{item.title}</h3>
                        <p>{item.company}</p>
                    </div>
                ))}
            </div>
            <div className="education">
            <div className="experience">
            <div className="text">
                <span>education.</span>
            </div>
                {education.map((item, index) => (
                    <div key={index} className="cell">
                        <p>{item.year} </p>
                        <h3>{item.title}</h3>
                        <p>{item.company}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </div>
    )
}
export default About