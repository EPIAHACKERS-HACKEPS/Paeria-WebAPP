import React, { useEffect } from 'react'
import styles from './Prediction.module.scss'
import BarChart from '../Charts/BarChart/BarChart'
import Separator from '../Separator/Separator'
import { useSelector } from 'react-redux'
import { selectFocusedParkingId, selectParkingById } from '../../store/selectors'
import fetchPrediction from '../../methods/fetchPrediction'
import selectPredictionsById from '../../store/selectors/selectPredictionsById'

function Main() {
  const focusedParkingId = useSelector(selectFocusedParkingId)
  // @ts-expect-error react-redux types are not working properly
  const parking = useSelector((state) => selectParkingById(state, focusedParkingId))

  // @ts-expect-error react-redux types are not working properly
  const predictions = useSelector((state) => selectPredictionsById(state, focusedParkingId))

  useEffect(() => {
    if (parking) {
      fetchPrediction(parking.parkingId)
    }
  }, [focusedParkingId])

  return (
    <div id="Prediction">
      <div className={styles.PredictionContainer}>
        <Separator/>
        <div className={styles.TextPrediction}>
          <h1>Predicció</h1>
          <p className={styles.ExplanationText}>
            En aquest gràfic es mostra <b>la mitjana de la predicció pels propers dies</b> basada en la informació
            aïllada de cada hora dels ultims 30 dies.
          </p>
        </div>
        <div className={styles.BarChartContainer}>
          <div className={styles.BarChart}>
            <BarChart display
                      dataArray={predictions.map((prediction) => prediction.occupation)}
                      dataLabels={predictions.map((prediction) => prediction.hour < 10 ? `0${prediction.hour}:00` : `${prediction.hour}:00`)}
                      label={'Places Lliures'} backgroundColor={[
              '#8a123f'
            ]}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
