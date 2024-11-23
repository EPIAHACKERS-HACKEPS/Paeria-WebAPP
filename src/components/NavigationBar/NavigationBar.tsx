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
            <a href="#about" className={styles.navLink}>Estadisticas</a>
            <a href="#about" className={styles.navLink}>Historial</a>
            <a href="#contact" className={styles.navLink}>Predicciones</a>
        </nav>
    );
}

export default NavigationBar;
