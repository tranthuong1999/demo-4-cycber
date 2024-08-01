import React, { useState, useEffect } from 'react'
import "./style.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const BackTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const handleClickBackTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible ? (
            <div className='back-top' onClick={handleClickBackTop}>
                <ArrowCircleUpIcon />
            </div>
        ) : (<div></div>)
    );
}

export default BackTop