import React from 'react';
import './App.css';
//Header//
import Header from './Components/Header/header';

//Peliculas//
import MostPopularMovies from './Components/MostPopularMovies/MostPopularMovies';
import MostApi from './Components/MostPopularMovies/MostApi';
import MostRankedApi from './Components/MostRankedMovies/MostRankedApi';
import MostRankedMovies from './Components/MostRankedMovies/MostRankedmovies';
import LastMovie from './Components/NewMovies/LastMovie';
import LastMovieApi from './Components/NewMovies/LastMovieApi';
import ComingMoviesApi from './Components/MoviesComingSoon/ComingSoonApi';
import MoviesComingSoon from './Components/MoviesComingSoon/MoviesComingSoon';
import NowPlayingMovies from './Components/NowPlayingMovies/NowPlayingMovies';
import NowPlayingMoviesApi from './Components/NowPlayingMovies/NowPlayingMoviesApi';

//Series//
import MostPopularSeries from './Components/MostPopularSeries/MostPopularSeries';
import MostPopularSeriesApi from './Components/MostPopularSeries/MostPopularSeriesApi';
import MostRatedSeries from './Components/MostRatedSeries/MostRatedSeries';
import MostRatedSeriesApi from './Components/MostRatedSeries/MostRatedSeriesApi';
import OnAirSeries from './Components/SeriesOnAir/SeriesOnAir';
import OnAirSeriesApi from './Components/SeriesOnAir/SeriesOnAirApi';
import OnAirTodaySeries from './Components/SeriesOnAirTodya.js/SeriesOnAirToday';
import OnAirTodaySeriesApi from './Components/SeriesOnAirTodya.js/SeriesOnAireTdoayApi';

//Footer//
import Footer from './Components/Footer/Footer';


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
      <LastMovie/>
      <LastMovieApi/>
      <ComingMoviesApi/>
      <MoviesComingSoon/>
      <NowPlayingMovies/>
      <NowPlayingMoviesApi/>
      <MostPopularSeries/>
      <MostPopularSeriesApi/>
      <MostRatedSeries/>
      <MostRatedSeriesApi/>
      <OnAirSeries/>
      <OnAirSeriesApi/>
      <OnAirTodaySeries/>
      <OnAirTodaySeriesApi/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
