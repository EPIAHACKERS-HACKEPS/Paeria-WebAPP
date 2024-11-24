import React from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Main from './components/Main/Main'
import History from './components/History/History'
import Prediction from './components/Prediction/Prediction'
import Maps from './components/Maps/Maps'


function App() {
  return (
    <>
      <div className="Main">
        <NavigationBar/>
        <Main/>
        <Maps/>
        <Prediction/>
        <History/>
      </div>
    </>
  )
}

export default App
