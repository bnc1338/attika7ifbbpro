import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import "./ProductComponent.css";
import "../MainCSS.css";

class ProductComponent extends Component {
    render() {
      const { enterCount, leaveCount } = this.props;
      return (
        <div className={enterCount>0? "container-box card show" : "container-box card"}>
            {this.props.Id}<br/>
            {this.props.Title} <br/>
            {this.props.Price}
            {this.props.Description}
        </div>
      );
    }
  }
  const MySection = handleViewport(ProductComponent, { rootMargin: '0px' });
  
  export default MySection;