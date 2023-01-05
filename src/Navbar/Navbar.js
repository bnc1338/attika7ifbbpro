import React, { useState } from 'react';
import './Navbar.css';
import Image from '../Icons/PinPiros.png'


const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isClosed, setIsClosed] = useState(true);
      window.addEventListener('scroll', ()=> {
        const navbar = document.getElementById('navArea');
        const scrolly=window.scrollY;

        if(scrolly>0){
            navbar.style.backgroundColor="rgb(255, 182, 0,0.4)";
          }
          else if(scrolly===0){
            navbar.style.backgroundColor="rgb(255, 182, 0,0.7)";
          }
      });

    return (
        <div className="Navbar">
            <div id='navArea' className={`nav-container ${isOpen && "open"} ${isClosed && "closed"}`}>
                <span className='nav-logo'>logo</span>
                <div className={`nav-items ${isOpen && "open"}`}>
                    <a href='https://bnc1338.github.io/attika7ifbbpro/'>About Me</a>
                    <a href='https://bnc1338.github.io/attika7ifbbpro/'>Programs</a>
                    <a href='https://bnc1338.github.io/attika7ifbbpro/'>Contact me!</a>
                </div>
                <a href='https://bnc1338.github.io/attika7ifbbpro/'>
                    <img src={Image} alt="" className='navbar-img'/>
                </a>
                <div className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => { 
                    setTimeout(function(){
                    setIsOpen(!isOpen);
                    }, 300);
                    setTimeout(function(){
                        setIsClosed(!isClosed);
                        }, 100);
                    }}>
                <div className='bar no-scroll'></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;