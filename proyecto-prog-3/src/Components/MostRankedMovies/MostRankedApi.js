import React, {Component} from 'react';
import MostRankedMovies from './MostRankedmovies';

class MostRankedApi extends Component{
    constructor(){
        super();
        this.state = {
            peliculasRankeadas:[],
        }
    }

    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=1';
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    peliculasRankeadas: data.results.splice(0,8),
                })
            })
            .catch(function(e){
                console.log(e)
            })
    }

    ocultar(id){
        let peliculasQueQuedan = this.state.peliculasRankeadas.filter(peliculas =>{
            return peliculas.id != id
        })  
        this.setState({
            peliculasRankeadas : peliculasQueQuedan
        })
    }

    masPeliculasRankeadas(){
        let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2'
        fetch(url)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then((data) =>{
            this.setState({
                peliculasRankeadas : this.state.peliculasRankeadas.concat(data.results.splice(0,9)),
                nextUrl : 'https://api.themoviedb.org/3/movie/top_rated?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2' 
            })
        })
    
}


render(){
    return(
        <React.Fragment>
            <div className='fondo'>
            <h2 className='titulos'> Most Ranked Movies </h2>
            <div className='peliss'>
            {this.state.peliculasRankeadas.map((peliculas, id)=><MostRankedMovies key={peliculas.title + id} dataRankedMovies={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
            </div>
            <button className='masPeliculas' onClick= {() => this.masPeliculasRankeadas() } >Mas peliculas</button>
            </div>
        </React.Fragment>

    )
}}
export default MostRankedApi;