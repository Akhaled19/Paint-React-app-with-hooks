import React, {useState, useEffect} from 'react';

export default function WindowSize() {
    const [[windowWidth, windowHight], setWindowSize] = useState([window.innerHeight, window.innerWidth]);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        let timeoutId;
        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
            setVisible(true)
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => setVisible(false), 100)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <div className={`window-size ${visible ? '' : 'hidden'}`}>
            {windowWidth} x {windowHight}
        </div>
    )
} 