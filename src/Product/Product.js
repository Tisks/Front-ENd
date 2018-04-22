import React, { Component } from 'react'

class Product extends Component {
  state = {
      myProps:[],
  }
  
  constructor(props) {
    super(props);
    this.state.myProps = this.props 
    this.identifierClick = this.identifierClick.bind(this)


  }
  identifierClick(){
    this.props.triggerList(this.state.myProps)

  }


  render() {

    return ( 
      <div className="col-lg-4 col-md-6 mb-4"   onClick={this.identifierClick}>
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{this.props.name}</a>
            </h4>
            <h5>${this.props.price}</h5>            
            <h5>{this.props.category}</h5>
            <p className="card-text">{this.props.expirationDate}</p>
          </div>
         
        </div>
        </div>

    )
  }

}

export default Product