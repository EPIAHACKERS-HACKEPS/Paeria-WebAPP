import React from 'react'
import styles from './Main.module.scss'
import PieChart from '../Charts/PieChart/PieChart'
import BarChart from '../Charts/BarChart/BarChart'
import { useSelector } from 'react-redux'
import { selectFocusedParkingId, selectParkingById } from '../../store/selectors'

function Main() {
  const focusedParkingId = useSelector(selectFocusedParkingId)
  // @ts-expect-error react-redux types are not working properly
  const parking = useSelector((state) => selectParkingById(state, focusedParkingId))

  return parking && (
    <div id="home" className={styles.Main}>
      <h1 className={styles.title}>{parking.name}</h1>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <p className={styles.label}>Places Lliures</p>
          <p className={styles.value}>{parking.size - parking.occupation}</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.occupied}>
            <p className={styles.label}>Places Ocupades</p>
            <p className={styles.value}>{parking.occupation}</p>
          </div>
        </div>
        <div className={styles.stat}>
          <p className={styles.label}>Places en Total</p>
          <p className={styles.value}>{parking.size}</p>
        </div>
      </div>

      <div className={styles.chart}>
        <PieChart dataArray={[parking.occupation, parking.size - parking.occupation]} dataLabels={['Ocupat', 'Lliure']}
                  label="Capacitat"/>
        <BarChart display={false} dataArray={[parking.occupation, parking.size - parking.occupation]}
                  dataLabels={['Ocupat', 'Lliure']}
                  label="Capacitat"
                  backgroundColor={[
                    '#8a123f',
                    '#c8c3bc'
                  ]}/>
      </div>
    </div>
  )
}

export default Main
