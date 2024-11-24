import React, { useEffect, useState } from 'react'
import styles from './NavigationBar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectFocusedParkingId, selectParkings } from '../../store/selectors'
import { focusParking, unwatchParking, watchParking } from '../../store/actions'
import selectWatchedParkings from '../../store/selectors/selectWatchedParkings'

function NavigationBar() {
  const [showFirstImage, setShowFirstImage] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const toggleImage = () => setShowFirstImage(!showFirstImage)
  const toggleMenu = () => setShowMenu(!showMenu)
  const toggleDropdown = () => setShowDropdown(!showDropdown)
  const parkings = useSelector(selectParkings)
  const dispatch = useDispatch()
  const focusedParkingId = useSelector(selectFocusedParkingId)
  const watchedParkings = useSelector(selectWatchedParkings)

  useEffect(() => {
    if (focusedParkingId) {
      if (watchedParkings.includes(focusedParkingId)) {
        setShowFirstImage(false)
      } else {
        setShowFirstImage(true)
      }
    } else if (!showFirstImage) {
      setShowFirstImage(true)
    }
  }, [focusedParkingId])

  return (
    <nav className={styles.navBar}>
      <a href="#home" className={styles.home}>
        <img src="/LogoPaeria.png" alt="Logo" style={{ height: '50px' }}/>
      </a>
      <div className={styles.menuMobile}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <img src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png" alt="Menu"
          />
        </div>
        <div className={`${styles.navCenter} ${showMenu ? styles.show : ''}`}>
          <a href="#localitzation" className={styles.navLink}>Localització</a>
          <a href="#Prediction" className={styles.navLink}>Predicció</a>
          <a href="#history" className={styles.navLink}>Historial</a>
          <div className={styles.navLink} onClick={toggleDropdown}>
            Parkings
            <div className={`${styles.dropdownContent} ${showDropdown ? styles.showDropdown : ''}`}>
              {parkings.map((parking) => (
                <p key={parking.parkingId} className={styles.dropdownItem}
                   onClick={() => {
                     toggleMenu()
                     // @ts-expect-error react-redux types are not working properly
                     dispatch(focusParking({ parkingId: parking.parkingId }))
                   }}>{parking.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p onClick={() => {
        toggleImage()
        if (showFirstImage) {
          // @ts-expect-error react-redux types are not working properly
          dispatch(watchParking({ parkingId: focusedParkingId }))
        } else {
          // @ts-expect-error react-redux types are not working properly
          dispatch(unwatchParking({ parkingId: focusedParkingId }))
        }
      }} className={styles.notifications}>
        <img
          src={showFirstImage ? 'https://img.icons8.com/?size=100&id=82754&format=png&color=8A123F' : 'https://img.icons8.com/?size=100&id=rW0l36JZZXst&format=png&color=8A123F'}
          alt="Notifications" style={{ height: '35px' }}/>
      </p>
    </nav>
  )
}

export default NavigationBar
