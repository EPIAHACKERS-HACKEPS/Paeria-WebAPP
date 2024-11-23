import React, { useEffect, useRef } from 'react';
import styles from './Main.module.scss';
import Chart from 'chart.js/auto';

function Main() {
    const chartRef = useRef<HTMLCanvasElement>(null); // Strongly type the ref with HTMLCanvasElement

    const data = {
        labels: ['Ocupat', 'Lliure'],
        datasets: [{
            label: '',
            data: [35, 15],
            backgroundColor: [
                'rgb(204, 0, 0)',
                'rgb(0, 153, 0)'
            ],
            hoverOffset: 4
        }]
    };

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const pieChart = new Chart(ctx, {
                    type: 'pie',
                    data: data,
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top'
                            }
                        }
                    }

                });

                return () => {
                    pieChart.destroy();
                };
            }
        }
    }, []);

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
                <canvas className={styles.PieChart} ref={chartRef} />
            </div>

            <div className={styles.map}>
                <p>Ubicación:</p>
            </div>
        </div>
    );
}

export default Main;
