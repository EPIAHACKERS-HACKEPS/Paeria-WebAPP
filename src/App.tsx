import React from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Main from './components/Main/Main'
import History from './components/History/History'
import Prediction from './components/Prediction/Prediction'
import Maps from './components/Maps/Maps'
import ParkingClosed from './components/ParkingClosed/ParkingClosed'
import { selectFocusedParkingId, selectParkingById } from './store/selectors'
import { useSelector } from 'react-redux'
import { ParkingStatus } from './constants.ts'


function App() {
  const focusedParkingId = useSelector(selectFocusedParkingId)
  // @ts-expect-error react-redux types are not working properly
  const parking = useSelector((state) => selectParkingById(state, focusedParkingId))
  
  return (
    <div className="Main">
      <NavigationBar/>
      {(parking && parking.status === ParkingStatus.Online) ? (
        <>
          <Main/>
          <Maps/>
          <Prediction/>
          <History/>
        </>
      ) : <ParkingClosed/>}
    </div>
  )
}

export default App
