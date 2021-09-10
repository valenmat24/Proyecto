import React, {Component} from 'react';
import MoviesComingSoon from './MoviesComingSoon';

class ComingMoviesApi extends Component{
    constructor(){
        super();
        this.state = {
            comingMovies:[],
        }
    }

    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=1';
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    comingMovies: data.results.splice(10-20),
                })
            })
            .catch(function(e){
                console.log(e)
            })
    }

    ocultar(id){
        let peliculasQueQuedan = this.state.comingMovies.filter(peliculas =>{
            return peliculas.id != id
        })  
        this.setState({
            comingMovies : peliculasQueQuedan
        })
    }

    masPeliculasComing(){
        let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2'
        fetch(url)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then((data) =>{
            this.setState({
                comingMovies : this.state.comingMovies.concat(data.results.splice(10-20)),
                nextUrl : 'https://api.themoviedb.org/3/movie/upcoming?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2' 
            })
        })
    
}

    render(){
        return(
            <React.Fragment>
                <h2 className='titulos'> Coming Movies </h2>
                {this.state.comingMovies.map((peliculas, id)=><MoviesComingSoon key={peliculas.title + id} dataComingMovies={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
                <button onClick= {() => this.masPeliculasComing() } >Mas peliculas</button>
            </React.Fragment>

        )
}}

export default ComingMoviesApi;