import React, { Component } from 'react';
import logo from './logo.svg';
import Axios from 'axios'
import ProductList from './ProductList/ProductList'
import './App.css';
// Import the css file
import 'react-responsive-modal/lib/react-responsive-modal.css';
import Modal from 'react-responsive-modal/lib/css';




/*
  
// You can choose your kind of history here (e.g. browserHistory)
// Your routes.js file

ReactDOM.render(
  <Router routes={routes} history={history} />,
  document.getElementById('your-app')
);
/*ReactDOM.render( 
    < App / > , document.getElementById('root')
);
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


           class AppAgregar extends Component{
            constructor(props){
              super(props);
              this.state ={
                nombreProducto:"",
                fechaVencimiento:"",
                categoriaProducto:"",
                precioProducto:"",
                view:""
              }
            }
            loadCancelar = () => {
              this.setState({view: "Cancelar"});
            }
          
            render(){
              console.log(this.props)
              if (this.state.view === "Cancelar") return  <App  /> ;
                
                return(
                  <div  className="text-center">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                      <div className="container">
                        <a className="navbar-brand" href="http://localhost:3000/">Dable</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ml-auto">
                          </ul>
                        </div>
                      </div>
                    </nav>                  
                    <h1 class="aa">Agregar Producto</h1>
          
                      <label>Nombre del producto</label>  
                      <ul><input type="text" value={this.state.nombreProducto} onChange={this.updateNombreP.bind(this)} required="required" /> </ul>
                      




                      <label>Fecha de vencimiento</label>  
                      <ul> <input type="date" value={this.state.fechaVencimiento} onChange={this.updateFechaV.bind(this)} required="required" /> </ul>
                      <label>Categoría</label>  
                      <ul><select selected={this.state.categoriaProducto} onClick={this.updateCategoriaP.bind(this)} required="required">
                          <option selected ="nacional">Nacional</option>
                          <option selected ="internacional">Internacional</option>
                        </select> 
                      </ul>
                     <label>Precio</label>  
                      <ul> <input type="number" min="159" max="20990" Value="4990" value={this.state.precioProducto} onChange={this.updatePrecioP.bind(this)} required="required"/> </ul>
                      <div class="container">
                        <div class="row justify-content-md-center">
                          <div class="col col-lg-2">



                           <button onClick={this.agregarProducto.bind(this)} className="btn btn-primary"> Agregar</button>
                          </div>
                          <div class="col col-lg-2">
                           <input type="button"  className="btn btn-danger" value="Cancelar" onClick = {this.loadCancelar}></input>  
                          </div>
                        </div>
                      </div>

                      <footer className="py-5 bg-dark">
                        <div className="container">
                          <p className="m-0 text-center text-white">¡Gracias por su visita!</p>
                        </div>
                      </footer>

                  </div>

                 
                );
            }
           
            updateNombreP(event){
              this.setState({
                nombreProducto: event.target.value
              });
            }
            updateFechaV(event){
              this.setState({
                fechaVencimiento: event.target.value
              });
            }
            updateCategoriaP(event){
              this.setState({
                categoriaProducto: event.target.selected
              });
            }
            updatePrecioP(event){
              this.setState({
                precioProducto: event.target.value
              });
            }
            agregarProducto(){

              if(this.state.nombreProducto, this.state.fechaVencimiento , this.state.categoriaProducto,this.state.precioProducto){
                alert('Producto agregado ' + this.state.nombreProducto + ' ' + this.state.fechaVencimiento + ' ' + this.state.categoriaProducto + ' ' +  this.state.precioProducto);
                      
              let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "@crossorigin",
                }
              };             
              const jsonAgregar ={
                name: this.state.nombreProducto,
                category: this.state.categoryProducto,
                price: parseInt(this.state.precioProducto)
              };
    
         
              Axios.post('http://138.197.105.209:2323/app/products/create', jsonAgregar, axiosConfig)
                  .then((res) => {
                    console.log("RESPONSE RECEIVED: ", res);
                    alert('Producto agregado ' + this.state.nombreProducto);

                  })
                  .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                  })

              }else{
                alert('Debes completar todos los campos');
              }
            
            }
          }
          




















          
          
          class AppEditar extends Component{
            constructor(props){
              super(props);
              console.log(this.props.products.name)
              console.log(this.props.products.category)
              this.state ={
                nombreProducto:"",
                fechaVencimiento:"",
                categoriaProducto:"",
                precioProducto:"",
              }
            }

            loadCancelar = () => {
              this.setState({view: "Cancelar"});
            }
          
            render(){
              if (this.state.view === "Cancelar") return  <App  /> ;
                return(
                  <div  className="text-center">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                      <div className="container">
                        <a className="navbar-brand" href="http://localhost:3000/">Dable</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ml-auto">
                          </ul>
                        </div>
                      </div>
                    </nav>
                    <h1 class="aa">Editar Producto</h1>
          
                      <label>Nombre del producto</label>  
                      <ul><input type="text" value={this.state.nombreProducto} onChange={this.updateNombreP.bind(this)} /> </ul>
                      <label>Fecha de vencimiento</label>  
                      <ul> <input type="date" value={this.state.fechaVencimiento} onChange={this.updateFechaV.bind(this)} /> </ul>
                      <label>Categoría</label>  
                      <ul><select value={this.state.categoriaProducto} onChange={this.updateCategoriaP.bind(this)}>
                          <option value="nacional">Nacional</option>
                          <option value="internacional">Internacional</option>
                        </select> 
                      </ul>
                      <label>Precio</label>  
                      <ul> <input type="number" min="159" max="20990" defaultValue="4999" value={this.state.precioProducto} onChange={this.updatePrecioP.bind(this)} /> </ul>
                      <div class="container">                      
                        <div class="row justify-content-md-center">
                          <div class="col col-lg-2">
                            <button onClick={this.editarProducto.bind(this)} className="btn btn-primary"  > Editar </button>
                          </div>
                          <div class="col col-lg-2">
                            <input type="button"  className="btn btn-danger" value="Cancelar" onClick = {this.loadCancelar}></input>
                          </div>
                        </div>
                      </div>
                  
                    <footer className="py-5 bg-dark">
                      <div className="container">
                        <p className="m-0 text-center text-white">¡Gracias por su visita!</p>
                      </div>
                    </footer>
                  </div>
                );
            }
          
            updateNombreP(event){
              this.setState({
                nombreProducto: event.target.value
              });
            }
            updateFechaV(event){
              this.setState({
                fechaVencimiento: event.target.value
              });
            }
            updateCategoriaP(event){
              this.setState({
                categoriaProducto: event.target.value
              });
            }
            updatePrecioP(event){
              this.setState({
                precioProducto: event.target.value
              });
            }
            editarProducto(){
              let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "@crossorigin",
                }
              };             
              const jsonEdicion ={
                name: this.state.nombreProducto,
                category: this.state.categoryProducto,
                price: parseInt(this.state.precioProducto)
              };

              Axios.put('http://138.197.105.209:2323/app/products/edit/'+(this.props.products.id).toString(), jsonEdicion, axiosConfig)
              .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
                alert('Producto editado ' + this.state.nombreProducto);

              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err);
              })

            }
          }

class App extends React.Component {

    constructor( props ) {
    super( props );

    this.handleCLickIdentify = this.handleCLickIdentify.bind(this)
    }

    state = {
       open:false,

        loading: true,
        products: [],
        color: 'aquamarine',
        color2: 'red',
        view: '',
        producto:[],


        setter: false,
        jsons: [{
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

    productDelete = () =>{
      if(this.state.propProduct.lenght !== 0){
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "@crossorigin",
          }
        };   
        Axios.put('http://138.197.105.209:2323/app/products/delete/'+(this.state.propProduct.id).toString(),axiosConfig)
           .then((res) => {
              console.log("RESPONSE RECEIVED: ", res);
               alert('Producto editado ' + this.state.nombreProducto);

            })
           .catch((err) => {
              console.log("AXIOS ERROR: ", err);
             })
          

      }
      }
      handleCLickIdentify= (jsons) =>{

      this.setState({
        propProduct: jsons
      })
      console.log(jsons)
      console.log(this.state.propProduct)
  
  
    }

    onOpenModal = () => {
      this.setState({ open: true });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };




    changeToSTring= () => {
      console.log(this.state.products)

    }
    fetchProducts() {
       Axios.get('http://138.197.105.209:2323/app/products/list')
            .then(response => {
                this.setState({ products: response.data });
                this.changeToSTring()
            })
            .catch(function(error) {
                console.log(error)
            })

        /*Axios.get('https://ghibliapi.herokuapp.com/films')
            .then(response => {
                console.log(this.state.jsons);
                this.setState({ products: this.state.jsons });
                console.log(this.state.products)
            })
            .catch(function(error) {
                console.log(error)
            })*/
            // console.log(this.state.color2)
            //this.setState({ color2: this.state.color });
            // console.log(this.state.color2);

    }
    loadAgregar = () => {
      this.setState({view: "Agregar"});
    }

    loadEditar= () => {
      this.setState({view: "Editar"});
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
        this.fetchProducts()
    }
    componentWillUnmount() {
    }


    loadCancelar = () => {
              this.setState({view: "Cancelar"});
            }

    loadEliminarProducto = () => {
              ///Eliminar Producto
            }

    render() {


      const { open } = this.state;

      if (this.state.view === "Cancelar") return  <App  /> ;
      if (this.state.view === "Agregar") return  <AppAgregar /> ;
      if (this.state.view === "Editar") return  <AppEditar /> ;

        return ( 
        <div className = "App" >

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container">
                <a className="navbar-brand" href="#" >Dable</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
        
            <div className="container">
        
              <div className="row">
        
                <div className="col-lg-6">        
                  <h1 className="my-4 " class="bb">Productos</h1>
                  <div class="row">
                    <div class="col col-lg-2">
                      <input type="button"  className="btn btn-primary" value="Agregar" onClick = {this.loadAgregar}></input>
                    </div>
                    <div class="col col-lg-2">
                      <input type="button"  className="btn btn-warning" value="Editar" onClick = {this.loadEditar}></input>                      
                    </div>
                  </div>
                  <br></br>
                  <div class="row" className="text-center">
                    <div class="col col-lg-4" >
                      <div>
                        <input type="button"  className="btn btn-danger" value="Eliminar" onClick = {this.onOpenModal}></input>
                        <Modal open={open} onClose={this.onCloseModal} little >
                          <h2>Eliminar producto</h2>
                          <p>
                            ¿Esta seguro que desea eliminar el producto?
                          </p>
                          <div class="row">
                            <div class="col col-lg-6">
                              <input type="button"  className="btn btn-primary" value="Cancelar" onClick = {this.loadCancelar}></input>
                            </div>
                            <div class="col col-lg-6">
                              <input type="button"  className="btn btn-danger" value="Confirmar" onClick = {this.productDelete}></input>
                            </div>
                          </div>
                        </Modal>
                      </div> 
                    </div>      
                  </div>
                </div>
                       
        
                <div className="col-lg-9">
                  <div className="row">
                   <ProductList products = { this.state.products }/>
                  </div>
                </div>
        
              </div>
        
            </div>
            <div>  
              <footer className="py-5 bg-dark">
                <div className="container">
                  <p className="m-0 text-center text-white">¡Gracias por su visita!</p>
                </div>
              </footer>
            </div>
        </div>
        );
    }
}



export default App;