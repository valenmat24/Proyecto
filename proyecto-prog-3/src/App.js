import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Search from './Components/Search/Search';
import MostPopularMovies from './Components/MostPopularMovies/MostPopularMovies';
import MostApi from './Components/MostPopularMovies/MostApi';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />,
      <Search />,
      <MostPopularMovies/>,
      <MostApi/>
    </React.Fragment>
  );
}

export default App;
