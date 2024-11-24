import React, { useState } from 'react';
import styles from './NavigationBar.module.scss';

function NavigationBar() {
    const [showFirstImage, setShowFirstImage] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleImage = () => setShowFirstImage(!showFirstImage);
    const toggleMenu = () => setShowMenu(!showMenu);
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <nav className={styles.navBar}>
            <a href="#home" className={styles.home}>
                <img src="/LogoPaeria.png" alt="Logo" style={{ height: '50px' }} />
            </a>
            <div className={styles.menuMobile}>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <img src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png" alt="Menu" className={styles.MenuIcon}
                    />
                </div>
                <div className={`${styles.navCenter} ${showMenu ? styles.show : ''}`}>
                    <a href="#localitzation" className={styles.navLink}>Localització</a>
                    <a href="#Prediction" className={styles.navLink}>Predicció</a>
                    <a href="#history" className={styles.navLink}>Historial</a>
                    <div className={styles.navLink} onClick={toggleDropdown}>
                        Parkings
                        <div className={`${styles.dropdownContent} ${showDropdown ? styles.showDropdown : ''}`}>
                            <p className={styles.dropdownItem} onClick={toggleMenu}>Parking 1</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" onClick={toggleImage} className={styles.notifications}>
                <img src={showFirstImage ? "https://img.icons8.com/?size=100&id=82754&format=png&color=8A123F" : "https://img.icons8.com/?size=100&id=rW0l36JZZXst&format=png&color=8A123F"} alt="Notifications" style={{ height: '35px' }} />
            </a>
        </nav>
    );
}

export default NavigationBar;
