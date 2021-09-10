import './App.css';
import Header from './Components/Header/header';
import MostPopularMovies from './Components/MostPopularMovies/MostPopularMovies';
import MostApi from './Components/MostPopularMovies/MostApi';
import Footer from './Components/Footer/Footer';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />,
      <MostPopularMovies/>,
      <MostApi/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
