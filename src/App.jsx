//import React from 'react';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MosaicImages from './components/MosaicImages';
import Roling from './components/Roling'
import Sliding from './components/Sliding'

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/mosaic" element={<MosaicImages/>}></Route> 
      <Route path="/rolling" element={<Roling/>}></Route>
      <Route path="/sliding" element={<Sliding/>}></Route>
      </Routes>
    </>
  );
}

export default App;
