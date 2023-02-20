import React from "react";
import './Container.css';
import About from "./Section_About/About";
import Video from "./Section_Video/Video";
import Products from "./Section_Products/Products";
import Bottom from "./Section_Bottom/Bottom";
import InstaFeed from "./Section_Instafeed/Instafeed";

const Container = ()=>{
    return (
        <div className="Container">
            <About />
            <Video />
            <Products />
            <InstaFeed token={'IGQVJYUC1EZAnRKejdiS215aElORnkxcUFoUlBKN1NqSWc3cUEtdEY2YW1EcTI3N2xoWHlHckZAfOU1QZAzBOX1otTEpXVDNYVHlsM0VRUkc3R0ZAUdGF5a2pwbDROYk9Del9rWVNpSnNycUVTeTJUbXVJbAZDZD'} limit={6}/>
            <Bottom />      
        </div>
    );
}

export default Container;