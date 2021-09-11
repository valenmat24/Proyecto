import './App.css';
//Header//
import Header from './Components/Header/header';

//Peliculas//
import MostPopularMovies from './Components/MostPopularMovies/MostPopularMovies';
import MostApi from './Components/MostPopularMovies/MostApi';
import MostRankedApi from './Components/MostRankedMovies/MostRankedApi';
import MostRankedMovies from './Components/MostRankedMovies/MostRankedmovies';
import LastMovie from './Components/NewMovies/LastMovie';
import LastMovieApi from './Components/NewMovies/LasMovieApi';
import ComingMoviesApi from './Components/MoviesComingSoon/ComingSoonApi';
import MoviesComingSoon from './Components/MoviesComingSoon/MoviesComingSoon';
import NowPlayingMovies from './Components/NowPlayingMovies/NowPlayingMovies';
import NowPlayingMoviesApi from './Components/NowPlayingMovies/NowPlayingMoviesApi';

//Series//
import MostPopularSeries from './Components/NewSeries/MostPopularSeries';
import MostPopularSeriesApi from './Components/NewSeries/MostPopularSeriesApi';


import Footer from './Components/Footer/Footer';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MostPopularMovies/>
      <MostApi/>
      <MostRankedMovies/>
      <MostRankedApi/>
      {/*<LastMovie/>*/}
      {/*<LastMovieApi/>*/}
      <ComingMoviesApi/>
      <MoviesComingSoon/>
      <NowPlayingMovies/>
      <NowPlayingMoviesApi/>
      <MostPopularSeries/>
      <MostPopularSeriesApi/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
