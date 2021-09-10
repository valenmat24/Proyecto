import './App.css';
import Header from './Components/Header/header';
import MostPopularMovies from './Components/MostPopularMovies/MostPopularMovies';
import MostApi from './Components/MostPopularMovies/MostApi';
import MostRankedApi from './Components/MostRankedMovies/MostRankedApi';
import MostRankedMovies from './Components/MostRankedMovies/MostRankedmovies';
import LastMovie from './Components/NewMovies/LastMovie';
import LastMovieApi from './Components/NewMovies/LasMovieApi';
import ComingMoviesApi from './Components/MoviesComingSoon/ComingSoonApi';
import MoviesComingSoon from './Components/MoviesComingSoon/MoviesComingSoon';
import Footer from './Components/Footer/Footer';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />,
      <MostPopularMovies/>,
      <MostApi/>
      <MostRankedMovies/>
      <MostRankedApi/>
      {/*<LastMovie/>*/}
      {/*<LastMovieApi/>*/}
      <ComingMoviesApi/>
      <MoviesComingSoon/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
