import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import "./Products.css";
import ProductComponent from "./ProductComponent";
import products from "./productList.json";
import Product from "./Product";
import "../MainCSS.css";
import '../MainJS';

class Products extends Component {
    render() {
      const { enterCount, leaveCount } = this.props;
      return (
          <div className="container-products">
             <ul>
                {
                    products.products.map((item,i)=>(
                        
                            <li key={item.Id}><ProductComponent Id={item.Id} Title={item.Titile} Price={item.Price}/></li>
                    ))
                 }
             </ul>
         </div>
      );
    }
  }
  const MySection = handleViewport(Products, { rootMargin: '0px' });
  
  export default MySection;