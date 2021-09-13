import React, {Component} from 'react';
import './Search.css'

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
                        <div>
                            <filterField filtrarPeliculas = {(texto) => this.filtrarPeliculas(texto)}/>
                        </div>
                        <div className= 'row card-container'></div>
            </React.Fragment>
        )
    }
    
}

export default Search;