import React, { Component } from 'react'
/*

                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#">Item One</a>
                          </h4>
                          <h5>$24.99</h5>
                          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                      </div>
                    </div>
                       <div className="product-item">
        <div className="product-title" style={{backgroundColor: this.props.color}}> 
          Título: {this.props.title}
        </div>
        <div className="product-description"> 
          Descripción: {this.props.description}
        </div>
      </div>
       "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "nombre": "Chela",
            "fechaVencimiento": "ojala nunca",
            "categoria": "importada",
            "precio": "luka"
*/
class Product extends Component {

  render() {
    return ( 
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{this.props.nombre}</a>
            </h4>
            <h5>{this.props.precio}</h5>
            <h5>{this.props.fechaVencimiento}</h5>
            <p className="card-text">{this.props.categoria}</p>
          </div>
          <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
           </div>
        </div>
        </div>

    )
  }

}

export default Product