import { useState, useEffect } from "react"
import "./Loading.css"

const Loading = () => {
    const shapes = ["square", "circle", "triangle"];
    const [currentClass, setCurrentClass] = useState(shapes[0]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); 

        const intervalId = setInterval(() => {
            setIsVisible(false); 

            setTimeout(() => {
                setCurrentClass(prevClass => {
                    const currentIndex = shapes.indexOf(prevClass);
                    const nextIndex = (currentIndex + 1) % shapes.length;
                    return shapes[nextIndex];
                });
                setIsVisible(true);
            }, ); 
        }, 150);

        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="loading_container">
            <div className={`${currentClass} shape`} style={{ opacity: isVisible ? 1 : 0 }}></div>    
        </div>
    )
}

export default Loading