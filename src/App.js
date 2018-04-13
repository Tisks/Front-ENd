import React, { Component } from 'react';
import logo from './logo.svg';
import Axios from 'axios'
import ProductList from './ProductList/ProductList'
import './App.css';

  /*
    <div className = "App-intro" >
                    <ProductList products = { this.state.products }
                    /> 
                  </div> 
                      <div className="col-lg-4 col-md-6 mb-4">
                      <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#">Item Three</a>
                          </h4>
                          <h5>$24.99</h5>
                          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="card-footer">
                          <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                      </div>
                    </div>
        return ( 
          <div className = "App" >
             <header className = "App-header" >
               <img src = { logo }
              className = "App-logo"
               alt = "logo" / >
               <h1 className = "App-title" > Bienvenido a la...ayudantía React( ? ) </h1> 
               <button onClick = { this.handleChangeColor } > Cambiar Color! </button>  
             </header > 
             <div className = "App-intro" >
                <FilmList films = { this.state.films }
                 color = { this.state.color }/> 
               </div> 
          </div>
          */

          /*
          Código del producto
        Nombre del producto
         Fecha de vencimiento
          Categoría (Importado, Nacional)
          Precio+
          
          
          
          
        Axios.get('https://ghibliapi.herokuapp.com/films')
            .then(response => {
                console.log(response);
                this.setState({ films: response.data });
            })
            .catch(function(error) {
                console.log(error)
            })
            */
class App extends Component {


    state = {
        loading: true,
        products: [],
        color: 'aquamarine',       
         color2: 'red',


        setter: false,
        jsons: [
          {
            "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "nombre": "Chela",
            "fechaVencimiento": "ojala nunca",
            "categoria": "importada",
            "precio": "luka"
           
          },
          {
            "id": "2baf70d1-4assa2bb-4437-b551-e5fed5a87abe",
            "nombre": "agua",
            "fechaVencimiento": "ojala nuncax4 ",
            "categoria": "nacional",
            "precio": "5666"
           
          },
          {
            "id": "2baf7sdsd0d1-42bb-4437-b551-e5fed5a87abe",
            "nombre": "vaso plastico",
            "fechaVencimiento": "ojala nuncax2",
            "categoria": "importada",
            "precio": "muchas lukas"
           
          },
          {
            "id": "2baf70d1-4assa2bb-4437-b551-e5fed5a87abe",
            "nombre": "agua",
            "fechaVencimiento": "ojala nuncax4 ",
            "categoria": "nacional",
            "precio": "5666"
           
          },
          {
            "id": "2baf70d1-4assa2bb-4437-b551-e5fed5a87abe",
            "nombre": "agua",
            "fechaVencimiento": "ojala nuncax4 ",
            "categoria": "nacional",
            "precio": "5666"
           
          },
          {
            "id": "2baf70d1-4assa2bb-4437-b551-e5fed5a87abe",
            "nombre": "agua",
            "fechaVencimiento": "ojala nuncax4 ",
            "categoria": "nacional",
            "precio": "5666"
           
          }
        ]
    }

    fetchFilms() {
      console.log(this.state.films);
          
      Axios.get('https://ghibliapi.herokuapp.com/films')
      .then(response => {
        console.log(this.state.jsons);
          this.setState({ products: this.state.jsons });
          console.log(this.state.products)
      })
      .catch(function(error) {
          console.log(error)
      })
     // console.log(this.state.color2)
      //this.setState({ color2: this.state.color });
     // console.log(this.state.color2);

    }

    handleChangeColor = () => {
        if (this.state.setter === false) {
            this.setState({ setter: true })
            this.setState({ color: 'red' })
        } else {
            this.setState({ color: 'aquamarine' })
            this.setState({ setter: false })

        }
    }

    componentDidMount() {
        this.fetchFilms()
    }

    render() {
        return ( 
        <div className = "App" >

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        
            <div className="container">
        
              <div className="row">
        
                <div className="col-lg-3">
        
                  <h1 className="my-4">Shop Name</h1>
                  <div className="list-group">
                    <a href="#" className="list-group-item">Category 1</a>
                    <a href="#" className="list-group-item">Category 2</a>
                    <a href="#" className="list-group-item">Category 3</a>
                  </div>
        
                </div>
        
              
        
                <div class="col-lg-9">


                  <div className="row">
                  <ProductList products = { this.state.products }
                    /> 
        
                  </div>
        
          
                 </div>
        
              </div>
        
            </div>
        
            <footer className="py-5 bg-dark">
              <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
              </div>
            </footer>
            
        </div>
        );
    }
}

export default App;