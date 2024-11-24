import React from 'react';
import styles from './ParkingClosed.module.scss';

const ParkingClosed = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.ParkingContainer}>
                <img
                    src="/parking2.png"
                    alt="Parking not available"
                    className={styles.ParkingImage}
                />
                <h1 className={styles.ParkingText}>
                    El pàrquing està actualment tancat.
                </h1>
                <p className={styles.ParkingSubText}>
                    Disculpi les molèsties, tornarem a estar disponibles aviat.
                </p>
            </div>
        </div>
    );
};

export default ParkingClosed;
