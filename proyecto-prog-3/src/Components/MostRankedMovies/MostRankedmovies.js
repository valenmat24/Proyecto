import React, {Component} from 'react';
import './MostRankedMovies.css'

class MostRankedMovies extends Component{
    constructor(props){
        super(props);
        this.state={
            verMas: false,
            text: 'Ver mas',
            selected: false,
        }
    }

//Para ver mas y ver menos////////////
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
//Para ver mas y ver menos////////////

    render(){
        if(this.props.dataRankedMovies == undefined) return (null)
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
                                    <h3>{this.props.dataRankedMovies.title}</h3>
                                    <p className={`extra ${this.state.verMas ? 'show' : 'hide'}`}>{this.props.dataRankedMovies.release_date} /  {this.props.dataRankedMovies.vote_average} stars. {this.props.dataRankedMovies.overview} </p>
                                    <p className='more' onClick={()=>this.verMas()}>{this.state.text}</p>
                                    <button onClick = { () => this.props.ocultar(this.props.dataRankedMovies.id)}>Quitar</button>
                                </main>
                            </article>
            
                        </section>
                    </div>
                </div>  
            </React.Fragment>
        )
    }
    
}

export default MostRankedMovies;