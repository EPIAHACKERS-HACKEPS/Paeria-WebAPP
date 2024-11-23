import React from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Main from './components/Main/Main'
import History from './components/History/History'
import Prediction from './components/Prediction/Prediction'


function App() {
  return (
    <div className="Main">
      <NavigationBar/>
      <Main/>
      <History/>
      <Prediction/>
    </div>
  )
}

export default App
