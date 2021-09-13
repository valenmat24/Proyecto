import React, {Component} from 'react';
import MostPopularSeries from './MostPopularSeries';
import Search from '../Search/Search';

class MostPopularSeriesApi extends Component{
    constructor(){
        super();
        this.state = {
            seriesPopulares:[],
            series:[],
            paginas: 1
        }
}
    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/tv/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=' + this.state.paginas;
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    seriesPopulares: data.results.splice(0,8), paginas: this.state.paginas+1,
                    series: data.results.splice(0,8)
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
            let url = 'https://api.themoviedb.org/3/tv/popular?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page='+this.state.paginas
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((data) =>{
                this.setState({
                    seriesPopulares : this.state.seriesPopulares.concat(data.results.splice(0,9)),paginas: this.state.paginas+1,
                    series: this.state.seriesPopulares.concat(data.results.splice(0,9))
                })
            })
        
    }
    filtrar(valorAFiltrar){
        let seriesFiltradas = this.state.seriesPopulares.filter(serie =>{ 
            return serie.name.toLowerCase().includes(valorAFiltrar.toLowerCase())
        })
        this.setState({
            series : seriesFiltradas
        })
    }

    render(){
        return(
            <React.Fragment>
                    <div className='fondo'>
                    <h2 className='titulos'> Popular Series </h2>
                    <Search filtrarPersonajes={(valorAFiltrar)=> this.filtrar(valorAFiltrar)}/>
                    <div className='peliss'>
                    {this.state.series.map((peliculas, id)=><MostPopularSeries key={peliculas.title + id} dataPopularSeries={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
                    </div>
                    <button className='masPeliculas' onClick= {() => this.masSeriesPopulares() } >More series</button>
                    </div>
            </React.Fragment>
            )
        }
}

export default MostPopularSeriesApi;