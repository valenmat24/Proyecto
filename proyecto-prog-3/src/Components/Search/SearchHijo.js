import React, {Component} from 'react';

class FiltroSearch extends Component{
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
            <form onSubmit={(e)=>this.avoidSending(e)}>
                <label for='nombre'>Que desea buscar?</label>
                <input type='text' name='nombre' id='nombre' onChange={(e)=>this.nuevoValorIngresadoPorElUsuario(e)} value={this.state.filtrarPor}/>
            </form>
        </React.Fragment>
    )
}
}

export default FiltroSearch;