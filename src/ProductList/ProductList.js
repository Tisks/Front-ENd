import React, { Component } from 'react';
import Product from './../Product/Product'

class ProductList extends Component {

    buildProduct(){
        return this.props.products.map((product) => {
          return(
            <Product nombre={product.nombre} fechaVencimiento={product.fechaVencimiento} categoria={product.categoria} precio={product.precio}/>
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