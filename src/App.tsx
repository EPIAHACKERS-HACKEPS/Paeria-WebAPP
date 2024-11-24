import React, { useState } from 'react'
import './App.css'
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Main from './components/Main/Main';
import History from './components/History/History';
import Prediction from './components/Prediction/Prediction';
import Maps from './components/Maps/Maps';
import ParkingClosed from './components/ParkingClosed/ParkingClosed';


function App() {

  const ParkingOpen = false;

  return (
    <>
      <div className='Main'>
        <NavigationBar />
        {ParkingOpen ? (
          <>
            <Main />
            <Maps />
            <Prediction />
            <History />
          </>
        ) : <ParkingClosed />}
      </div>
    </>
  );
}

export default App
