import { useState } from 'react';
import NavBar from './components/NavBar';
import AllItems from './components/AllItems';
// import Router from 'react-router-dom'


function App() {

  return (
    <>
    <NavBar />
    <AllItems />
    {/* <Router>
      <Route path = "/" element={FaHome}/>
    </Router> */}
    </>
  )
}

export default App;
