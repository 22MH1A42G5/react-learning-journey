import { useState } from 'react';
import NavBar from './components/NavBar';
import AllItems from './components/AllItems';
import Home from './pages/Home';
import {Routes , Route } from 'react-router-dom'
import FavouritesPage from './pages/FavouritesPage';
import AboutPage from './pages/AboutPage';
// import Router from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/favourites" element={<FavouritesPage />} />
        <Route path = "/about/:Id" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App;
