import React from 'react';
import styles from './History.module.scss';
import Separator from '../Separator/Separator';
import BarChart from '../Charts/BarChart/BarChart';

function Main() {
    return (
        <div>
            <div className={styles.HistoryContainer}>
                <Separator />
                <h1>Historial</h1>
                <BarChart dataArray={[5, 3, 3, 3, 6, 7, 10, 15, 18, 19, 20, 21, 25, 27, 23, 20, 21, 25, 26, 22, 20, 15, 13, 12]} dataLabels={["00:00", "01:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]} label={'Ocupació'} backgroundColor={[
                    '#003166',
                ]} />
            </div>
        </div>
    );
}

export default Main;
