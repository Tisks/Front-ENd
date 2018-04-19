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
          price+
          
          
          
          
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
                categoryProducto:"",
                priceProducto:"",
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
                        <a className="navbar-brand" href="#" onClick = {this.loadCancelar}>Dable</a>
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
                    <h1 className="aa">Agregar Producto</h1>
          
                      <label>Nombre del producto</label>  
                      <ul><input type="text" value={this.state.nombreProducto} onChange={this.updateNombreP.bind(this)} required="required" /> </ul>
                      




                      <label>Fecha de vencimiento</label>  
                      <ul> <input type="date" value={this.state.fechaVencimiento} onChange={this.updateFechaV.bind(this)} required="required" /> </ul>
                      <label>Categoría</label>  
                      <ul><select onClick={this.updatecategoryP.bind(this)} required="required">
                          <option value ="nacional">nacional</option>
                          <option value ="importada">importada</option>
                        </select> 
                      </ul>
                     <label>price</label>  
                      <ul> <input type="number" min="159" max="20990"  value={this.state.priceProducto} onChange={this.updatepriceP.bind(this)} required="required"/> </ul>
                      <div className="container">
                        <div className="row justify-content-md-center">
                          <div className="col col-lg-2">



                           <button onClick={this.agregarProducto.bind(this)} className="btn btn-primary"> Agregar</button>
                          </div>
                          <div className="col col-lg-2">
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
            updatecategoryP(event){
              this.setState({
                categoryProducto: event.target.value
              });
            }
            updatepriceP(event){
              this.setState({
                priceProducto: event.target.value
              });
            }
            agregarProducto(){

              if(this.state.nombreProducto, this.state.fechaVencimiento , this.state.categoryProducto,this.state.priceProducto){
                alert('Producto agregado ' + this.state.nombreProducto + ' ' + this.state.fechaVencimiento + ' ' + this.state.categoryProducto + ' ' +  this.state.priceProducto);
                      
              let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "@crossorigin",
                }
              };             
              const jsonAgregar ={
                name: this.state.nombreProducto,
                category: this.state.categoryProducto,
                price: parseInt(this.state.priceProducto)
              };
    
         
              Axios.post('http://138.197.105.209:2323/app/products/create', jsonAgregar, axiosConfig)
                  .then((res) => {
                    console.log("RESPONSE RECEIVED: ", res);
                    alert('Producto agregado ' + this.state.nombreProducto);

                  })
                  .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                  })

              }
              else{
                alert('Debes completar todos los campos');
              }
            
            }
          }
          

          class AppEditar extends Component{
            constructor(props){
              super(props);
              console.log('Aqui estan los props')
              console.log(this.props.products.name)
              console.log(this.props.products.category)
              this.state ={
                view: ""
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
                        <a className="navbar-brand" href="#" onClick = {this.loadCancelar}>Dable</a>
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
                    <h1 className="aa">Editar Producto</h1>
          
                      <label>Nombre del producto</label>  
                      <ul><input type="text" value={this.props.products.name} onChange={this.updateNombreP.bind(this)} /> </ul>
                      <label>Fecha de vencimiento</label>  
                      <ul> <input type="date" value={this.props.products.fechaVencimiento} onChange={this.updateFechaV.bind(this)} /> </ul>
                      <label>Categoría</label>  
                      <ul><select onChange={this.updatecategoryP.bind(this)}>
                         <option selected hidden>{this.props.products.category} </option>
                          <option value="nacional">nacional</option>
                          <option value="internacional">importada</option>
                        </select> 
                      </ul>
                      <label>price</label>  
                      <ul> <input type="number" min="159" max="20990"  value={this.props.products.price} onChange={this.updatepriceP.bind(this)} /> </ul>
                      <div className="container">                      
                        <div className="row justify-content-md-center">
                          <div className="col col-lg-2">
                            <button onClick={this.editarProducto.bind(this)} className="btn btn-primary"  > Editar </button>
                          </div>
                          <div className="col col-lg-2">
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
            updatecategoryP(event){
              this.setState({
                categoryProducto: event.target.value
              });
            }
            updatepriceP(event){
              this.setState({
                priceProducto: event.target.value
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
                price: parseInt(this.state.priceProducto)
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
        propProduct: [],


        setter: false,
        jsons: [{
                "name": "Chela",
                "fechaVencimiento": "ojala nunca",
                "category": "importada",
                "price": 1000

            },
            {
                "name": "agua",
                "fechaVencimiento": "ojala nuncax4 ",
                "category": "nacional",
                "price": 5666

            },
            {
                "name": "vaso plastico",
                "fechaVencimiento": "ojala nuncax2",
                "category": "importada",
                "price": 1500

            },
            {
                "name": "agua",
                "fechaVencimiento": "ojala nuncax4 ",
                "category": "nacional",
                "price": 5666

            },
            {
              "name": "vaso plastico",
              "fechaVencimiento": "ojala nuncax2",
              "category": "importada",
              "price": 1500

          },
          {
            "name": "vaso plastico",
            "fechaVencimiento": "ojala nuncax2",
            "category": "importada",
            "price": 1500

        },
        ]
    }

    productDelete = () =>{
        
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
      handleCLickIdentify= (jsons) =>{
        this.loadNullify(this.state.view);

      this.setState({
        propProduct: jsons
      })
      console.log(jsons)
      console.log(this.state.propProduct)
      this.setState({view: ""})
  
  
    }

    onOpenModal = () => {
      if(!(this.isEmpty(this.state.propProduct))){ 
        this.setState({ open: true });
      }
      else{
        alert('No se ha seleccionado ningun item para eliminar, seleccione uno para poder eliminarlo');
      }
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };




    changeToSTring= () => {
      console.log(this.state.products)

    }
    fetchProducts() {
      /* Axios.get('http://138.197.105.209:2323/app/products/list')
            .then(response => {
                this.setState({ products: response.data });
                this.changeToSTring()
            })
            .catch(function(error) {
                console.log(error)
            })*/

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
        document.addEventListener("mousedown", this.handleClickOutside);

    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);

    }

    loadNullify = (estado) => {
      this.setState({estado: ""});
    }
   
    /**
     * Set the wrapper ref
     */

    loadCancelar = () => {
              this.setState({view: "Cancelar"});
     }
     isEmpty(arg) {
      for (var item in arg) {
        return false;
      }
      return true;
    }

    render() {


      const { open } = this.state;

      if (this.state.view === "Cancelar") return  <App  /> ;
      if (this.state.view === "Agregar") return  <AppAgregar /> ;
      if (this.state.view === "Editar"){
        console.log('Esto es lo que hay adentro')
        console.log(this.state.propProduct)
        console.log('Este es el lenght')
        console.log(this.state.propProduct.lenght)

        if(!(this.isEmpty(this.state.propProduct))){
          console.log('Pase por aqui')

          console.log(this.state.propProduct)

          return  <AppEditar products= {this.state.propProduct} /> ;
        }
        else{
          alert('No se ha seleccionado ningun item para editar, seleccione uno para poder editarlo');
        }

      }

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
        
                <div className="col-lg-3">        
                  <h1 className="my-4 " className="bb">Productos</h1>
                  <div className="row">
                    <ul>
                      <input type="button"  className="btn btn-primary" value="Agregar" onClick = {this.loadAgregar}></input>
                      <input type="button"  className="btn btn-warning" value="Editar" onClick = {this.loadEditar}></input>                      
                    </ul>
                  </div>
                  <br></br>
                  <div className="row" className="text-center">
                    <div className="col col-lg-4" >
                      <div>
                        <ul>
                        <input type="button"  className="btn btn-danger" value="Eliminar" onClick = {this.onOpenModal}></input>
                        </ul>
                        <Modal open={open} onClose={this.onCloseModal} little >
                          <h2>Eliminar producto</h2>
                          <p>
                            ¿Esta seguro que desea eliminar el producto?
                          </p>
                          <div className="row">
                            <div className="col col-lg-6">
                              <input type="button"  className="btn btn-primary" value="Cancelar" onClick = {this.loadCancelar}></input>
                            </div>
                            <div className="col col-lg-6">
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
                   <ProductList products = { this.state.products } triggerApp = {this.handleCLickIdentify}/>
                  </div>
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
}



export default App;