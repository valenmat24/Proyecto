import React, {Component} from 'react';
import './MostPopularMovies.css'

class MostPopularMovies extends Component{
    constructor(props){
        super(props);
        this.state={
            verMas: false,
            text: 'Ver mas',
            selected: false,
            filtrarPor: '',
            
        }
    }
    verMas(){
        if(this.state.verMas){
            this.setState({
                verMas: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                verMas: true,
                text: 'Ver menos'
            })            
        }
    }

    selected(){
        if(this.state.selected){
            this.setState({
                selected: false,
            })
        } else {
            this.setState({
                selected: true,
            })
        }
    }

    

   nuevoValorIngresadoPorElUsuario(evento){
        this.setState({
            filtrarPor: evento.target.value //Es asi je
        },()=> this.props.filtrarPeliculas(this.state.filtrarPor))
    }

    render(){
        if(this.props.dataPopularMovies == undefined) return (null)
        return(
            <React.Fragment>
                <div className={`character-card ${this.state.selected ? 'active' : ''}`} onDoubleClick={ ()=>this.selected()}>
                                    <img alt='20' src={`https://image.tmdb.org/t/p/w500/${this.props.dataPopularMovies.backdrop_path}`} />
                                    <h3>{this.props.dataPopularMovies.title}</h3>
                                    <p className={`extra ${this.state.verMas ? 'show' : 'hide   '}`}>{this.props.dataPopularMovies.release_date} / Rated: {this.props.dataPopularMovies.vote_average} / Overview: {this.props.dataPopularMovies.overview}</p>
                                    <button type="button" className="btn btn-outline-primary" onClick={()=>this.verMas()}>{this.state.text}</button>
                                    <button type="button" className="btn btn-danger" onClick = { () => this.props.ocultar(this.props.dataPopularMovies.id)}>Quitar</button>
                                
                </div>
            
            </React.Fragment>
        )
    }
    
}

export default MostPopularMovies;