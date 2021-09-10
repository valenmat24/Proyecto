// import React, {Component} from 'react';
// import LastMovie from './LastMovie';

// class LastMovieApi extends Component{
//     constructor(){
//         super();
//         this.state = {
//             peliculaNueva:[],
//         }
//     }

//     componentDidMount(){
//         console.log('me monte')
//         let url = 'https://api.themoviedb.org/3/movie/latest?api_key=2b661f2a58f652da9b57fcc62c66ce78&language=en-US';
//         fetch(url)
//             .then((response)=>response.json())
//             .then((data)=>{
//                 console.log(data);
//                 this.setState({
//                     peliculaNueva: data
//                 })
//             })
//             .catch(function(e){
//                 console.log(e)
//             })
//     }

// render(){
//     return(
//         <React.Fragment>
//             <h2 className='titulos'> Last Movie </h2>
//             <LastMovie {}/>)}
//         </React.Fragment>

//     )
// }}
// export default LastMovieApi;