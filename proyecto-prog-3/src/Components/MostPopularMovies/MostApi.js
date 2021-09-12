import React, {Component} from 'react';
import Search from '../Search/Search';
import MostPopularMovies from './MostPopularMovies';
import './MostPopularMovies.css'

class MostApi extends Component{
    constructor(){
        super();
        this.state = {
            peliculasPopulares:[],
        }
}
    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78';
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    peliculasPopulares: data.results.splice(0,8)
                })
            })
            .catch(function(e){
                console.log(e)
            })
    }

    ocultar(id){
        let peliculasQueQuedan = this.state.peliculasPopulares.filter(peliculas =>{
            return peliculas.id != id
        })  
        this.setState({
            peliculasPopulares : peliculasQueQuedan
        })
    }

    masPeliculasPopulares(){
            let url = 'https://api.themoviedb.org/3/movie/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2'
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((data) =>{
                this.setState({
                    peliculasPopulares : this.state.peliculasPopulares.concat(data.results.splice(11-20)),
                    nextUrl : 'https://api.themoviedb.org/3/movie/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2' 
                })
            })
        
    }

    
    filtrarPeliculas(textoAFiltrar){
        let peliculasFiltradas = this.state.peliculasPopulares.filter(peliculas =>{ 
            return peliculas.title.toLowerCase().includes(textoAFiltrar.toLowerCase())
        })
        this.setState({
            peliculas : peliculasFiltradas
        })
    }


    render(){
        return(
            <React.Fragment>
                    <div className='fondo'>
                    <Search filtrarPeliculas = {(texto)=> this.filtrarPeliculas(texto)}/>
                    <h2 className='titulos'> Most Popular Movies </h2>
                    <div className='peliss'>
                    {this.state.peliculasPopulares.map((peliculas, id)=><MostPopularMovies key={peliculas.title + id} dataPopularMovies={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
                    </div>
                    <button className='masPeliculas' onClick= {() => this.masPeliculasPopulares() } >Mas peliculas</button>
                    </div>
            </React.Fragment>
            )
        }
}

export default MostApi;