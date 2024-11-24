import React from 'react';
import styles from './NavigationBar.module.scss';

function NavigationBar() {
    return (
        <nav className={styles.navBar}>
            <a href="#home" className={styles.navLink}>
                <div className={styles.home}>
                    <img src="/LogoPaeria.png" alt="Logo" style={{ height: '50px' }} />
                </div>
            </a>
            <a href="#localitzation" className={styles.navLink}>Localització</a>
            <a href="#Prediction" className={styles.navLink}>Predicció</a>
            <a href="#history" className={styles.navLink}>Historial</a>
            <div className={styles.navLink}>
                Parkings
                <div className={styles.dropdownContent}>
                    <a href="#parking1" className={styles.dropdownItem}>Parking 1</a>
                    <a href="#parking2" className={styles.dropdownItem}>Parking 2</a>
                    <a href="#parking3" className={styles.dropdownItem}>Parking 3</a>
                </div>
            </div>        </nav>
    );
}

export default NavigationBar;
