import React, {useState, useEffect} from 'react';

export default function useWindowSize(cb) {
    const [[windowWidth, windowHight], setWindowSize] = useState([window.innerHeight, window.innerWidth]);
    
    useEffect(() => {
        const handleResize = () => {
            cb()
            setWindowSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
       [windowWidth, windowHight]
    )
} 