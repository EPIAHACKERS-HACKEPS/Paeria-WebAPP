import React, { useEffect, useRef } from 'react';
import styles from './PieChart.module.scss';
import Chart from 'chart.js/auto';

interface PieChartProps {
    dataArray: number[];
    dataLabels: string[];
    label: string
}
function NavigationBar({ dataArray, dataLabels, label }: PieChartProps) {
    const chartRef = useRef<HTMLCanvasElement>(null); // Strongly type the ref with HTMLCanvasElement

    const data = {
        labels: dataLabels,
        datasets: [{
            label: label,
            data: dataArray,
            backgroundColor: [
                'rgb(204, 0, 0)',
                'rgb(0, 153, 0)'
            ],
            hoverOffset: 4,
            borderWidth: 0,
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
                        color: "#c8c3bc",
                        responsive: true,
                        plugins: {
                            legend: {

                                position: 'bottom',
                                labels: {
                                    font: {
                                        size: 16,
                                    }
                                },
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (tooltipItem) {
                                        let sum = 0;
                                        let dataArr = tooltipItem.dataset.data;
                                        dataArr.map(data => {
                                            sum += data;
                                        });
                                        let percentage = ((tooltipItem.raw as number) * 100 / sum).toFixed(2) + '%';
                                        return `${tooltipItem.label}: ${percentage}`;
                                    }
                                },
                                bodyFont: {
                                    size: 14
                                },
                                titleFont: {
                                    size: 16
                                }
                            }
                        },

                    }
                });

                return () => {
                    pieChart.destroy();
                };
            }
        }
    }, []);

    return (
        <canvas className={styles.PieChart} ref={chartRef} />
    );
}

export default NavigationBar;
