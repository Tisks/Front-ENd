import React, { Component } from 'react';
import Product from './../Product/Product'

class ProductList extends Component {
  constructor( props ) {
    super( props );

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }
 
  getKey(){
    return this.keyCount++;
  }
  //fechaVencimiento={product.fechaVencimiento} 
    buildProduct(){
        return this.props.products.map((product) => {
          return(
            <Product key={this.getKey()} name={product.name} 
            category={product.category} 
            price={product.price}  />
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