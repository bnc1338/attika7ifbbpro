import React from "react";
import './Container.css';
import About from "./Section_About/About";
import Video from "./Section_Video/Video";
import Products from "./Section_Products/Products";
import Bottom from "./Section_Bottom/Bottom";

const Container = ()=>{
    return (
        <div className="Container">
            <About />
            <Video />
            <Products />
            <Bottom />
        </div>
    );
}

export default Container;