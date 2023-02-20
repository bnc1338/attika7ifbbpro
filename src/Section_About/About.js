import React from "react";
import "./About.css";
import "../MainCSS.css";

const About = () =>{
    return (
        <div className="About">
            <div className="content">
                <div className="text unselectable">
                    <p> Lorem ipsum dolor sit amet, 
                    </p>
                    <p> consectetur adipiscing vel neque eu dolor 
                    </p>
                    <p> Suspendisse suscipit 
                    </p>
                </div>
                <div className="text2">
                    <p className="unselectable"> Number one worldwide </p>
                </div>
                <div className="button unselectable">
                <a href="https://www.instagram.com/7.seven_ifbb/"><button className="bn632-hover bn27">Follow</button></a>
                </div>
                <div className="image">
                </div>
                <div className="glowing-circle">    
                </div>
            </div>
        </div>
    );
}

export default About;