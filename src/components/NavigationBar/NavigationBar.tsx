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
            <a className={styles.navLink}>Parkings</a>
        </nav>
    );
}

export default NavigationBar;
