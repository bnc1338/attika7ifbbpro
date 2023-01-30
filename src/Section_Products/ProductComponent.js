import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import "./ProductComponent.css";
import "../MainCSS.css";

class ProductComponent extends Component {
  
    render() {
      const { enterCount, leaveCount } = this.props;
      return (
        <div className={enterCount>0? "container-box card show" : "container-box card"}
        style={{backgroundImage: `url(${this.props.ImageSource})`}}>
            <div className='box-end'>
              <h5>{this.props.Title}</h5>
              <div className='box-inner'>
                <p>{this.props.Description}</p>
                <div className='cart-bu`tton'>
                <p >ADD TO CART</p>
              </div>
              </div>
              
            </div>
        </div>
      );
    }

  }
  

  const MySection = handleViewport(ProductComponent, { rootMargin: '0px' });
  
  export default MySection;