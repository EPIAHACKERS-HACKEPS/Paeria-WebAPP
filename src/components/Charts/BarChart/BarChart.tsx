import React, { useEffect, useRef } from 'react';
import styles from './BarChart.module.scss';
import Chart from 'chart.js/auto';

function BarChart() {
    const chartRef = useRef<HTMLCanvasElement>(null); // Strongly type the ref with HTMLCanvasElement

    const data = {
        labels: ['Ocupat', 'Lliure'],
        datasets: [{
            label: 'Capacitat',
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
                const barChart = new Chart(ctx, {
                    type: 'bar',
                    data: data,
                    options: {
                        responsive: true,
                        color: "#c8c3bc",
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    font: {
                                        size: 16,
                                    },
                                    color: '#c8c3bc'
                                },

                            },
                            tooltip: {
                                bodyFont: {
                                    size: 16
                                },
                                titleFont: {
                                    size: 16
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: '#c8c3bc'
                                },
                            },
                            x: {
                                ticks: {
                                    color: '#c8c3bc'
                                },
                            }
                        },
                    }
                });

                return () => {
                    barChart.destroy();
                };
            }
        }
    }, []);

    return (
        <canvas className={styles.BarChart} ref={chartRef} />
    );
}

export default BarChart;
