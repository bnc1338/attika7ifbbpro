import React, { Component } from 'react';
import { useState } from 'react';
import handleViewport from 'react-in-viewport';
import "./Bottom.css";
import instaicon from '../Icons/insta-icon.png';
import ytbicon from '../Icons/youtube-icon.png';
import attiIcon from '../Icons/logo-black-white.png';
import mails from "../MailList";
import { Link } from 'react-router-dom';
import "../MainCSS.css";

class Bottom extends Component {
  
    render() {
      return (
        <div className="Bottom">
             <div className="container-bottom">
                <h2 className='unselectable'>Email</h2>
                <a href="mailto:bencebarnabasszocs@gmail.com?subject=Mail from our Website" className='unselectable'>Business & Coaching Inquiries </a>
                <a href="mailto:bencebarnabasszocs@gmail.com?subject=Mail from our Website" className='unselectable'>Website Technical Support </a>
                <h3 className='unselectable'>Subscribe To My Mailing List, and get announced about every promotions, and updates!</h3>
                <p className='unselectable'>Type in your e-mail address and click on the button to keep in touch</p>
                <div className='subscribtion-panel'>
                    <div className='left'>
                       <input type={'email'} placeholder="Enter your e-mail address!" id="emailInput">
                       </input>
                    </div>
                    <div className='right unselectable' onClick={asd}>
                        <p>SIGN UP!</p>
                    </div>
                </div>
                <div className='images unselectable'>
                <img src={instaicon} alt='instaicon' onClick={()=>{
                    window.open("https://www.instagram.com/7.seven_ifbb/")
                    }}></img>
                <img src={ytbicon} alt='ytbicon' onClick={()=>{
                    window.open("https://www.youtube.com/@JankoAttila7")
                    }}></img>
                </div>
                <div className='copyright-div unselectable'>
                <p>© Copyright Jankó Attila 2023</p>
                <img src={attiIcon} alt='attiIcon'></img>
                </div>
             </div>
        </div>
      );
    }
  }
  
  const asd = ()=>{
    let mail = document.getElementById("emailInput").value;
    console.log(mails);
    if(mail.length > 4 && mail.includes("@") && mail.includes(".")){
        if(!mails.includes(mail)){
            mails.push(mail);
            console.log(mail);
          
        }
    }
    document.getElementById("emailInput").value="";

  }
  const MySection = handleViewport(Bottom, { rootMargin: '-300px' });
  
  export default MySection;
