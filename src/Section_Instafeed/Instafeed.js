import React, { useState, useEffect, useRef } from 'react'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import './Instafeed.css';

const InstaFeed = () => {
    return (
    <div className='InstaFeed'>
        <div className='feed-container'>
            <p>Don't Miss Out</p>
            <div className='carousel'>

            </div>
            <p>My Recent Instagram Content</p>
        </div> 
    </div>   
    );
}

export default InstaFeed;