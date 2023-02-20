import React, { useState, useEffect, useRef } from 'react'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import './Instafeed.css';

const InstaFeed = ({token, ...props}) => {
    return (
    <div className='InstaFeed'>
        <div className='feed-container'>
            <p>Don't Miss Out</p>
            <div className='carousel'>
                <InstagramFeed token="IGQVJYUC1EZAnRKejdiS215aElORnkxcUFoUlBKN1NqSWc3cUEtdEY2YW1EcTI3N2xoWHlHckZAfOU1QZAzBOX1otTEpXVDNYVHlsM0VRUkc3R0ZAUdGF5a2pwbDROYk9Del9rWVNpSnNycUVTeTJUbXVJbAZDZD"  
                    counter="10"/>
            </div>
            <p>My Recent Instagram Content</p>
        </div> 
    </div>   
    );
}

export default InstaFeed;