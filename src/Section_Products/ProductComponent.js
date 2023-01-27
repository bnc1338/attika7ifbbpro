import React from "react";
import "./ProductComponent.css";
import "../MainCSS.css";

const ProductComponent = (props) => {
    return (
        <div className="container-box">
            {props.Id}<br/>
            {props.Title} <br/>
            {props.Price}
        </div>
    )
}

export default ProductComponent;