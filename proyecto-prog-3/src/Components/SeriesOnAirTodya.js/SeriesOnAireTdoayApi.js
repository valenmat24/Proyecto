import React, {Component} from 'react';
import OnAirTodaySeries from './SeriesOnAirToday';


class OnAirTodaySeriesApi extends Component{
    constructor(){
        super();
        this.state = {
            seriesOnAirToday:[],
            paginas: 1 
        }
}
    componentDidMount(){
        console.log('me monte')
        let url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=1' +this.state.paginas;
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    seriesOnAirToday: data.results.splice(0,8), paginas: this.state.paginas+1
                })
            })
            .catch(function(e){
                console.log(e)
            })
    }

    ocultar(id){
        let peliculasQueQuedan = this.state.seriesOnAirToday.filter(peliculas =>{
            return peliculas.id != id
        })  
        this.setState({
            seriesOnAirToday : peliculasQueQuedan
        })
    }

    masSeriesOnAirToday(){
            let url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US&page=' + this.state.paginas;
            fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then((data) =>{
                this.setState({
                    seriesOnAirToday : this.state.seriesOnAirToday.concat(data.results.splice(0,9)), paginas: this.state.paginas+1
                })
            })
        
    }

    render(){
        return(
            <React.Fragment>
                    <div className='fondo'>
                    <h2 className='titulos'> SERIES ON AIR TODAY </h2>
                    <div className='peliss'>
                    {this.state.seriesOnAirToday.map((peliculas, id)=><OnAirTodaySeries key={peliculas.title + id} dataOnAirTodaySeries={peliculas} ocultar = {(idEliminar)=>this.ocultar(idEliminar)}/>)}
                    </div>
                    <button className='masPeliculas' onClick= {() => this.masSeriesOnAirToday() } >More series</button>
                    </div>
            </React.Fragment>
            )
        }
}

export default OnAirTodaySeriesApi;