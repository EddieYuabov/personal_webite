import { useEffect, useState } from "react";
import Loading from "../components/Loading"
import "./About.css"
import { JavaScriptIcon, LinuxIcon, NextJsIcon, PythonIcon, ReactJsIcon } from "../images/svgIcons";

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
            title: "Full-stack UI/UX Developer",
            company: "1up"
        }, 
        {
            year: "2022 - 2023",
            title: "Software Development Consultant",
            company: "General Assembly"
        },
        {
            year: "2021 - 2022",
            title: "Application Developer",
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
            year: "2022",
            title: "UI/UX Developing course",
            company: "Harvard University"
        }, 
        {
            year: "2021 - 2022",
            title: "Full-Stack Software immersive course",
            company: "General Assembly"
        }
    ]

    const skills = [
        {
            name: "next.js",
            percent: "75%",
            icon: <NextJsIcon className="icon"/>
        },
        {
            name: "React.js",
            percent: "99%",
            icon: <ReactJsIcon className="icon"/>
        }, 
        {
            name: "Javascript",
            percent: "95%",
            icon: <JavaScriptIcon className="icon"/>
        },
        {
            name: "Python",
            percent: "95%",
            icon: <PythonIcon className="icon"/>
        },
        {
            name: "Linux",
            percent: "90%",
            icon: <LinuxIcon className="icon"/>
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
        <div className="resume">
            <div className="experience">
            <div className="text">
                <h2>experience.</h2>
            </div>
                {experience.map((item, index) => (
                    <div key={index} className="cell">
                    <p>{item.year} </p>
                        <h3>{item.title}</h3>
                        <p>{item.company}</p>
                    </div>
                ))}
            </div>
            <div className="experience">
            <div className="text">
                <h2>education.</h2>
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
        <div style={{ display: "block", height: "60vh" }}>
            <div className="text">
                <h2>skills.</h2>
            </div>
                <div className="skills">
                    {skills.map((item, index) => (
                        <div key={index} className="cell">
                            {item.icon}
                            <h3>{item.percent}</h3>
                            <p className="name">{item.name} </p>
                        </div>
                    ))}
                </div>
        </div>
    </div>
    )
}
export default About