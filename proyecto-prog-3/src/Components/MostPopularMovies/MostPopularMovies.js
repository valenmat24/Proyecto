import React, {Component} from 'react';
import './MostPopularMovies.css'

class MostPopularMovies extends Component{
    constructor(props){
        super(props);
        this.state={
            verMas: false,
            text: 'Ver mas',
            selected: false,
        }
    }
    verMas(){
        if(this.state.verMas){
            this.setState({
                verMas: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                verMas: true,
                text: 'Ver menos'
            })            
        }
    }

    selected(){
        if(this.state.selected){
            this.setState({
                selected: false,
            })
        } else {
            this.setState({
                selected: true,
            })
        }
    }
    render(){
        if(this.props.dataPopularMovies == undefined) return (null)
        return(
            <React.Fragment>
            
                <div className={`character-card ${this.state.selected ? 'active' : ''}`} onDoubleClick={ ()=>this.selected()}>
                        <div className='pelisPopu'>
                        <section class="card-container">
                            <section class="navigation">
                                <div>
                                    <i class="fas fa-chevron-left"></i>
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                                <i class="far fa-window-close"></i>
                            </section>
                            <article>
                                <main>
                                    <img alt='20' src={`https://image.tmdb.org/t/p/w500/${this.props.dataPopularMovies.backdrop_path}`} />
                                    <h3>{this.props.dataPopularMovies.title}</h3>
                                    <p className={`extra ${this.state.verMas ? 'show' : 'hide   '}`}>{this.props.dataPopularMovies.release_date} / Rated: {this.props.dataPopularMovies.vote_average} / Overview: {this.props.dataPopularMovies.overview}</p>
                                    <p className='more' onClick={()=>this.verMas()}>{this.state.text}</p>
                                    <button onClick = { () => this.props.ocultar(this.props.dataPopularMovies.id)}>Quitar</button>
                                </main>
                            </article>
            
                        </section>
                    </div>
                </div>
            
            </React.Fragment>
        )
    }
    
}

export default MostPopularMovies;