import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import "./Products.css";
import ProductComponent from "./ProductComponent";
import "../MainCSS.css";
import '../MainJS';
import PRODUCTS from './prods.js';

class Products extends Component {
    render() {
      const { enterCount, leaveCount } = this.props;
      return (
        <div className='Products'>
          <h1 className={enterCount>leaveCount? "anim" : ""}>
            Reach your fitness goals!
          </h1>
          <div className="container-products">
                {
                   PRODUCTS && PRODUCTS.map((item,i)=>(
                      <div key={item.Id}><ProductComponent Id={item.Id} Title={item.Titile} Price={item.Price} Description={item.Description} ImageSource={item.Image}/></div>
                    ))
                 }
            </div> 
        </div>
              
      );
    }
  }
  const MySection = handleViewport(Products, { rootMargin: '-200px' });
  
  export default MySection;