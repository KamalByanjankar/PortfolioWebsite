import React, {useState, useEffect} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import './ScrollButton.css';

function ScrollButton() {

    const [visible, setVisible] = useState(false)
  
    useEffect(() => {
        const toggleVisible = () => {
            window.pageYOffset > 300 ? setVisible(true) : setVisible(false);
        }

        window.addEventListener('scroll', toggleVisible)

        return () => {
            window.removeEventListener('scroll', toggleVisible)    
        };
    }, [])
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };

  return (
    <button className="scrollButton__button">
        <FaArrowCircleUp onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
    </button>
  )
}

export default ScrollButton