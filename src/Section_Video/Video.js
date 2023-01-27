import React, { lazy } from 'react';
import "./Video.css";
import "../MainCSS.css";
import "../MainJS";

const Video = () => {
    return (
        <div className="Insta">
            <div className="container">
                <div className="video">
                    <iframe type="text/html" width="100%" height="100%" title="player" id="videoplayer" 
                    src="https://www.youtube.com/embed/zaT15m1dfmY?&loop=1&controls=0&autoplay=1"
                    frameBorder="0"></iframe>
                </div>   
             </div>
        </div>
    );
}

export default Video;
