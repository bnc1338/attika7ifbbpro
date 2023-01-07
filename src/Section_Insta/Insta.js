import React from "react";
import "./Insta.css";



const Insta = () => {
    return (
        <div className="Insta">
            <div className="container">
                <div id="ytplayer" className="video">
                    <iframe type="text/html" width="100%" height="100%" title="player"
                    src="https://www.youtube.com/embed/zaT15m1dfmY?&loop=1&autoplay=1&controls=0"
                    frameborder="0"></iframe>
                </div>   
             </div>
            
        </div>
    );
}

export default Insta;