import React from 'react'
import styles from './Maps.module.scss'
import Separator from '../Separator/Separator'
import { useSelector } from 'react-redux'
import { selectFocusedParkingId, selectParkingById } from '../../store/selectors'

function Maps() {
  const focusedParkingId = useSelector(selectFocusedParkingId)
  const parking = useSelector((state) => selectParkingById(state, focusedParkingId))

  return parking && (
    <div id="localitzation">
      <div className={styles.MapsContainer}>
        <Separator/>

        <div className={styles.Maps}>
          <h1>Localització</h1>
        </div>
        <div className={styles.MapIframe}>
          <iframe
            src={parking.url_embed}
            width="100%"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Maps
