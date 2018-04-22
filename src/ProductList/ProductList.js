import React, { Component } from 'react';
import Product from './../Product/Product'

class ProductList extends Component {
  state = {
    propProduct: []

  }
  
  constructor( props ) {
    super( props );

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }
  getKey(){
    return this.keyCount++;
  }
    buildProduct(){
        return this.props.products.map((product) => {
          return(
            <Product key={this.getKey()} name={product.name} 
            category={product.category} 
            price={product.price} id={product.id} expirationDate={product.expirationDate} triggerList={this.props.triggerApp}/>
          )
        })
      }
    
      render() {
        return (
            this.buildProduct()
        )
      }

}


export default ProductList;