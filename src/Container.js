import React from "react";
import './Container.css';
import About from "./Section_About/About";
import Video from "./Section_Video/Video";
import Products from "./Section_Products/Products";

const Container = ()=>{
    return (
        <div className="Container">
            <About />
            <Video />
            <Products />
        </div>
    );
}

export default Container;