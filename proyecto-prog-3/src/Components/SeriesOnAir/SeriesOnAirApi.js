import React, {Component} from 'react';
import OnAirSeries from './SeriesOnAir';


class OnAirSeriesApi extends Component{
    constructor(){
        super();
        this.state = {
            seriesOnAir:[],
        }
}
    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=1';
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    seriesOnAir: data.results.splice(0,8)
                })
            })
            .catch(function(e){
                console.log(e)
            })
    }

    ocultar(id){
        let peliculasQueQuedan = this.state.seriesOnAir.filter(peliculas =>{
            return peliculas.id != id
        })  
        this.setState({
            seriesOnAir : peliculasQueQuedan
        })
    }

    masSeriesOnAir(){
            let url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=1'
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((data) =>{
                this.setState({
                    seriesOnAir : this.state.seriesOnAir.concat(data.results.splice(0,9)),
                    nextUrl : 'https://api.themoviedb.org/3/tv/on_the_air?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2' 
                })
            })
        
    }

    render(){
        return(
            <React.Fragment>
                    <div className='fondo'>
                    <h2 className='titulos'> SERIES ON AIR </h2>
                    <div className='peliss'>
                    {this.state.seriesOnAir.map((peliculas, id)=><OnAirSeries key={peliculas.title + id} dataOnAirSeries={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
                    </div>
                    <button className='masPeliculas' onClick= {() => this.masSeriesOnAir() } >More series</button>
                    </div>
            </React.Fragment>
            )
        }
}

export default OnAirSeriesApi;