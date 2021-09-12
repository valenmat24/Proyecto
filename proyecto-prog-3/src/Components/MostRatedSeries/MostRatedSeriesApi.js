import React, {Component} from 'react';
import MostRatedSeries from './MostRatedSeries';


class MostRatedSeriesApi extends Component{
    constructor(){
        super();
        this.state = {
            seriesRankeadas:[],
        }
}
    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=1';
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    seriesRankeadas: data.results.splice(0,8)
                })
            })
            .catch(function(e){
                console.log(e)
            })
    }

    ocultar(id){
        let peliculasQueQuedan = this.state.seriesRankeadas.filter(peliculas =>{
            return peliculas.id != id
        })  
        this.setState({
            seriesRankeadas : peliculasQueQuedan
        })
    }

    masSeriesRankeadas(){
            let url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=1'
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((data) =>{
                this.setState({
                    seriesRankeadas : this.state.seriesRankeadas.concat(data.results.splice(0,9)),
                    nextUrl : 'https://api.themoviedb.org/3/tv/top_rated?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2' 
                })
            })
        
    }

    render(){
        return(
            <React.Fragment>
                    <div className='fondo'>
                    <h2 className='titulos'> BETER RATED SERIES </h2>
                    <div className='peliss'>
                    {this.state.seriesRankeadas.map((peliculas, id)=><MostRatedSeries key={peliculas.title + id} dataRatedSeries={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
                    </div>
                    <button className='masPeliculas' onClick= {() => this.masSeriesRankeadas() } >More series</button>
                    </div>
            </React.Fragment>
            )
        }
}

export default MostRatedSeriesApi;