import React, {Component} from 'react';
import NowPlayingMovies from './NowPlayingMovies';
import './NowPlayingMovies.css'

class NowPlayingMoviesApi extends Component{
    constructor(){
        super();
        this.state = {
            peliculasEnAire:[],
            paginas: 1
        }
}
    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=1'+ this.state.paginas;
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    peliculasEnAire: data.results.splice(0,8),paginas: this.state.paginas+1
                })
            })
            .catch(function(e){
                console.log(e)
            })
    }

    ocultar(id){
        let peliculasQueQuedan = this.state.peliculasEnAire.filter(peliculas =>{
            return peliculas.id != id
        })  
        this.setState({
            peliculasEnAire : peliculasQueQuedan
        })
    }

    masPeliculasEnAire(){
            let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page='+this.state.paginas
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((data) =>{
                this.setState({
                    peliculasEnAire : this.state.peliculasEnAire.concat(data.results.splice(0,9)),paginas: this.state.paginas+1
                })
            })
        
    }

    render(){
        return(
            <React.Fragment>
                    <div className='fondo'>
                    <h2 className='titulos'> Movies On Air </h2>
                    <div className='peliss'>
                    {this.state.peliculasEnAire.map((peliculas, id)=><NowPlayingMovies key={peliculas.title + id} dataPlayingMovies={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
                    </div>
                    <button className='masPeliculas' onClick= {() => this.masPeliculasEnAire() } >Mas peliculas</button>
                    </div>
            </React.Fragment>
            )
        }
}

export default NowPlayingMoviesApi;