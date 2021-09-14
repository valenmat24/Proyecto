import React, {Component} from 'react';
import './Search.css'
import FiltroSearch from './SearchHijo';

class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            filtrarPor: ''
        }
}

avoidSending(evento){
    evento.preventDefault()
}
nuevoValorIngresadoPorElUsuario(evento){
    this.setState({
        filtrarPor: evento.target.value //Es asi je
    },()=> this.props.filtrarPeliculas(this.state.filtrarPor))
}
    render(){
        return(
            <React.Fragment>
                            <form className="navbar navbar-dark bg-dark" onSubmit={(e)=>this.avoidSending(e)}>
                                <input className="buscador" placeholder='Search your Movie' type='text' name='nombre' id='nombre' onChange={(e)=>this.nuevoValorIngresadoPorElUsuario(e)} value={this.state.filtrarPor}/>
                            </form>
            </React.Fragment>
        )
    }
    
}

export default Search;