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
                            <form  onSubmit={(e)=>this.avoidSending(e)} className='searcher'>
                            <input placeholder="Search Movies/Series" className='buscador' type='text' name='nombre' id='nombre' onChange={(e)=>this.nuevoValorIngresadoPorElUsuario(e)} value={this.state.filtrarPor}/>
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </form>
            </React.Fragment>
        )
    }
    
}

export default Search