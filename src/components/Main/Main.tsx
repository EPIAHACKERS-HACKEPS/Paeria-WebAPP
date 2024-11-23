import React from 'react';
import styles from './Main.module.scss';
import PieChart from '../Charts/PieChart/PieChart';
import BarChart from '../Charts/BarChart/BarChart';
import Separator from '../Separator/Separator';
import Maps from '../Maps/Maps';

function Main() {

    return (
        <div className={styles.Main}>
            <h1 className={styles.title}>Parking Fugarolas</h1>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <p className={styles.label}>Plazas Libres</p>
                    <p className={styles.value}>15</p>
                </div>
                <div className={styles.stat}>
                    <div className={styles.occupied}>
                        <p className={styles.label}>Plazas Ocupadas</p>
                        <p className={styles.value}>35</p>
                    </div>
                </div>
                <div className={styles.stat}>
                    <p className={styles.label}>Total de plazas</p>
                    <p className={styles.value}>50</p>
                </div>
            </div>

            <div className={styles.chart}>
                <PieChart />
                <BarChart />
            </div>
            <Separator />

            <div className={styles.map}>
                <Maps />
            </div>
        </div>
    );
}

export default Main;
