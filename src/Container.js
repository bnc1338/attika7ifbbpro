import React from "react";
import './Container.css';
import About from "./Section_About/About";
import Insta from "./Section_Insta/Insta";
import { Route } from 'react-router-dom';

const Container = ()=>{
    return (
        <div className="Container">
            <About />
            <Insta />
        </div>
    );
}

export default Container;