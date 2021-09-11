import React, {Component} from 'react';
import MostPopularSeries from './MostPopularSeries';


class MostPopularSeriesApi extends Component{
    constructor(){
        super();
        this.state = {
            seriesPopulares:[],
        }
}
    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/tv/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=1';
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    seriesPopulares: data.results.splice(11-20),
                })
            })
            .catch(function(e){
                console.log(e)
            })
    }

    ocultar(id){
        let peliculasQueQuedan = this.state.seriesPopulares.filter(peliculas =>{
            return peliculas.id != id
        })  
        this.setState({
            seriesPopulares : peliculasQueQuedan
        })
    }

    masSeriesPopulares(){
            let url = 'https://api.themoviedb.org/3/tv/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2'
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((data) =>{
                this.setState({
                    seriesPopulares : this.state.seriesPopulares.concat(data.results.splice(11-20)),
                    nextUrl : 'https://api.themoviedb.org/3/tv/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=2' 
                })
            })
        
    }

    render(){
        return(
            <React.Fragment>
                    <div className='fondo'>
                    <h2 className='titulos'> Popular Series </h2>
                    <div className='peliss'>
                    {this.state.seriesPopulares.map((peliculas, id)=><MostPopularSeries key={peliculas.title + id} dataPopularSeries={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
                    </div>
                    <button className='masPeliculas' onClick= {() => this.masSeriesPopulares() } >More series</button>
                    </div>
            </React.Fragment>
            )
        }
}

export default MostPopularSeriesApi;