import React, { useState } from 'react';
import './Navbar.css';
import Image from '../Icons/PinPiros.png'
import logoSeven from '../Icons/logo-seven.png';
import "../MainCSS.css";

const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isClosed, setIsClosed] = useState(true);
      window.addEventListener('scroll', ()=> {
        const navbar = document.getElementById('navArea');
        const scrolly=window.scrollY;

        if(scrolly>0){
            navbar.style.backgroundColor="rgba(255, 255, 255, 0.5)";
          }
          else if(scrolly===0){
            navbar.style.backgroundColor="rgba(255, 255, 255, 1)";
          }
      });

    return (
        <div className="Navbar">
            <div id='navArea' className={`nav-container ${isOpen && "open"} ${isClosed && "closed"}`}>
                <div className='nav-logo unselectable'>
                    <img src={logoSeven} alt="" width={"100px"} height={"auto"}/>    
                </div>
                <div className={`nav-items ${isOpen && "open"} unselectable`}>
                    <a href='/about' >About Me</a>
                    <a href='/insta'>Programs</a>
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