import React, { useState } from 'react';
import './Navbar.css';
import Image from '../Icons/PinPiros.png'
import Image2 from '../Icons/PinPiros-2.png';
import logoSeven from '../Icons/logo-seven.png';
import "../MainCSS.css";
import logoSevenWhite from '../Icons/logo-seven-white.png';

const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isClosed, setIsClosed] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
      window.addEventListener('scroll', ()=> {
        const navbar = document.getElementById('navArea');
        const scrolly = window.scrollY;
        const navlogo = document.getElementById('nav-logo-img');
        const cartlogo = document.getElementById('nav-logo-cart');

        if(scrolly<=200){
            navbar.style.backgroundColor="rgba(255, 255, 255, 1)";
            navlogo.src=logoSeven;
            cartlogo.src=Image;
            setIsScrolled(false);
        }
        else{
            navbar.style.backgroundColor="rgba(0, 0, 0, 0.9)";
            if(window.innerWidth > 700){
                navlogo.src=logoSevenWhite;
                cartlogo.src=Image2;
            }
            setIsScrolled(true);
        }

      });

    return (
        <div className="Navbar">
            <div id='navArea' className={`nav-container ${isOpen && "open"} ${isClosed && "closed"}`}>
                <div className='nav-logo unselectable'>
                    <img id='nav-logo-img' src={logoSeven} alt="" width={"100px"} height={"auto"} />    
                </div>
                <div className={`nav-items ${isOpen && "open"} unselectable`}>
                    <a href='/about' className={`${isScrolled ? "nav-item-change-color":""}`}>About Me</a>
                    <a href='/insta' className={`${isScrolled ? "nav-item-change-color":""}`}>Programs</a>
                    <a href='https://bnc1338.github.io/attika7ifbbpro/' className={`${isScrolled ? "nav-item-change-color":""}`}>Contact me!</a>
                </div>
                <a href='https://bnc1338.github.io/attika7ifbbpro/'>
                    <img id='nav-logo-cart' src={Image} alt="" className='navbar-img'/>
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