import React, { useEffect, useRef } from 'react'
import styles from './BarChart.module.scss'
import Chart from 'chart.js/auto'

interface BarChartProps {
  dataArray: number[]; // Explicitly typing dataArray as an array of numbers
  dataLabels: string[];
  label: string
  backgroundColor: string[]
  display: boolean
}

function BarChart({ dataArray, dataLabels, label, backgroundColor, display }: BarChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null) // Strongly type the ref with HTMLCanvasElement

  const data = {
    labels: dataLabels,
    datasets: [{
      label: label,
      data: dataArray,
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      if (ctx) {
        const barChart = new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            color: '#c8c3bc',
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  font: {
                    size: 16
                  },
                  color: '#c8c3bc'
                },
                display: display

              },
              tooltip: {
                bodyFont: {
                  size: 16
                },
                displayColors: false,
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
                grid: {
                  color: 'rgba(255, 255, 255, 0)'
                }
              },
              x: {
                ticks: {
                  color: '#c8c3bc'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0)'
                }
              }
            }
          }
        })

        return () => {
          barChart.destroy()
        }
      }
    }
  }, [data])

  return (
    <canvas className={styles.BarChart} ref={chartRef}/>
  )
}

export default BarChart
