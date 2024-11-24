import React from 'react'
import styles from './ParkingClosed.module.scss'
import { useSelector } from 'react-redux'
import { selectFocusedParkingId, selectParkingById } from '../../store/selectors'

const ParkingClosed = () => {
  const focusedParkingId = useSelector(selectFocusedParkingId)
  // @ts-expect-error react-redux types are not working properly
  const parking = useSelector((state) => selectParkingById(state, focusedParkingId))

  return parking && (
    <div className={styles.Container}>
      <div className={styles.ParkingContainer}>
        <img
          src="/parking2.png"
          alt="Parking not available"
          className={styles.ParkingImage}
        />
        <h1 className={styles.ParkingText}>
          {`${parking.name} està actualment tancat.`}
        </h1>
        <p className={styles.ParkingSubText}>
          Disculpi les molèsties, tornarem a estar disponibles aviat.
        </p>
      </div>
    </div>
  )
}

export default ParkingClosed
