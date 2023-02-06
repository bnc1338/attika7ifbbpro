import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import "./Bottom.css";
import instaicon from '../Icons/insta-icon.png';
import ytbicon from '../Icons/youtube-icon.png';

class Bottom extends Component {
    render() {
      return (
        <div className="Bottom">
             <div className="container-bottom">
                <h2>Email</h2>
                <a href="mailto:bencebarnabasszocs@gmail.com?subject=Mail from our Website">Business & Coaching Inquiries </a>
                <a href="mailto:bencebarnabasszocs@gmail.com?subject=Mail from our Website">Website Technical Support </a>
                <h3>Subscribe To My Mailing List, and get announced about every promotions, and updates!</h3>
                <p>Type in your e-mail address and click on the button to keep in touch</p>
                <div className='subscribtion-panel'>
                    <div className='left'>
                       <input type={'email'} placeholder="Enter your e-mail address!">
                       </input>
                    </div>
                    <div className='right'>
                        <p>SIGN UP!</p>
                    </div>
                </div>
                <div className='images'>
                <img src={instaicon} alt='instaicon'></img>
                <img src={ytbicon} alt='ytbicon'></img>
                </div>
                
             </div>
        </div>
      );
    }
  }
  const MySection = handleViewport(Bottom, { rootMargin: '-300px' });
  
  export default MySection;
