import React from 'react';
import styles from './Main.module.scss';
import PieChart from '../Charts/PieChart/PieChart';
import BarChart from '../Charts/BarChart/BarChart';

function Main() {

    return (
        <div className={styles.Main}>
            <h1 className={styles.title}>Pàrquing Fugarolas</h1>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <p className={styles.label}>Places Lliures</p>
                    <p className={styles.value}>15</p>
                </div>
                <div className={styles.stat}>
                    <div className={styles.occupied}>
                        <p className={styles.label}>Places Ocupades</p>
                        <p className={styles.value}>35</p>
                    </div>
                </div>
                <div className={styles.stat}>
                    <p className={styles.label}>Places en Total</p>
                    <p className={styles.value}>50</p>
                </div>
            </div>

            <div className={styles.chart}>
                <PieChart dataArray={[35, 15]} dataLabels={['Ocupat', 'Lliure']} label='Capacitat' />
                <BarChart dataArray={[35, 15]} dataLabels={['Ocupat', 'Lliure']} label='Capacitat' backgroundColor={[
                    'rgb(204, 0, 0)',
                    'rgb(0, 153, 0)'
                ]} />
            </div>
            {/* <div className={styles.map}>
                <Maps />
            </div>
            <Separator /> */}
        </div>
    );
}

export default Main;
