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
    buildProduct(){
        return this.props.products.map((product) => {
          return(
            <Product key={this.getKey()} nombre={product.nombre} 
            fechaVencimiento={product.fechaVencimiento} categoria={product.categoria} 
            precio={product.precio}  />
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