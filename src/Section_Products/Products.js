import React from "react";
import "./Products.css";
import ProductComponent from "./ProductComponent";
import "../MainCSS.css";
import "../MainJS";
import products from "./productList.json";
import Product from "./Product";
import "../MainCSS.css";
import '../MainJS';

const Products = () => {
return (
    <div className="Products">
        <div className="container-products">
            <ul>
                {
                    products.products.map((item,i)=>(
                        
                        <li key={item.Id} className=""><ProductComponent Id={item.Id} Title={item.Titile} Price={item.Price}/></li>
                    ))
                }
            </ul>
        </div>
    </div>
    
);
}

export default Products;

