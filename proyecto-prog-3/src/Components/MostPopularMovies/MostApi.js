import React, {Component} from 'react';
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
        let url = 'https://developers.themoviedb.org/3/movies/get-popular-movies';
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
            })
    }
    render(){
        return(
            <React.Fragment>
                
            </React.Fragment>
            )
        }
}

export default MostApi;