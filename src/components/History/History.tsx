import * as React from 'react'
import { useEffect } from 'react'
import styles from './History.module.scss'
import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import { getTheme } from '@table-library/react-table-library/mantine'
import Separator from '../Separator/Separator'
import { useSelector } from 'react-redux'
import { selectFocusedParkingId, selectParkingById } from '../../store/selectors'
import fetchHistory from '../../methods/fetchHistory'
import { History, HourlyData } from '../../store/types/history'
import dayjs from 'dayjs'
import selectHistoryById from '../../store/selectors/selectHistoryById'


const Component = () => {
    const focusedParkingId = useSelector(selectFocusedParkingId)
    // @ts-expect-error react-redux types are not working properly
    const parking = useSelector((state) => selectParkingById(state, focusedParkingId))

    // @ts-expect-error react-redux types are not working properly
    const history = useSelector((state) => selectHistoryById(state, focusedParkingId))

    const [moreOccupied, setMoreOccupied] = React.useState<string | null>(null)
    const [lessOccupied, setLessOccupied] = React.useState<string | null>(null)

    const calculateOccupationStats = (data: History[]) => {
        const hourlyData: HourlyData = data.reduce<HourlyData>((acc, record) => {
            const hour = dayjs(record.time).format('HH');
            if (!acc[hour]) {
                acc[hour] = { totalOccupation: 0, count: 0 };
            }
            acc[hour].totalOccupation += record.occupation;
            acc[hour].count += 1;
            return acc;
        }, {});

        const hourlyAverages = Object.keys(hourlyData).map((hour) => {
            const { totalOccupation, count } = hourlyData[hour];
            return { hour, averageOccupation: totalOccupation / count };
        });

        const mostOccupied = hourlyAverages.reduce((prev, current) =>
            prev.averageOccupation > current.averageOccupation ? prev : current
        );

        const leastOccupied = hourlyAverages.reduce((prev, current) =>
            prev.averageOccupation < current.averageOccupation ? prev : current
        );

        return {
            mostOccupiedHour: mostOccupied.hour + ':00',
            leastOccupiedHour: leastOccupied.hour + ':00',
        };
    };


    useEffect(() => {
        if (history.length > 0) {
            const { mostOccupiedHour, leastOccupiedHour } = calculateOccupationStats(history);
            setMoreOccupied(mostOccupiedHour)
            setLessOccupied(leastOccupiedHour)
        }
    }, [history])

    useEffect(() => {
        if (parking) {
            fetchHistory(parking.parkingId)
        }
    }, [focusedParkingId])

    const theme = useTheme([
        getTheme(),
        {
            Table: `
            --data-table-library_grid-template-columns:  25% 25% 25% 25% minmax(150px, 1fr);
          `
        }
    ])

    const COLUMNS = [
        { label: `Data i hore d'entrada`, renderCell: (item: History) => dayjs(item.time).format('DD/MM/YYYY HH:mm') },
        { label: 'Places de parking disponibles', renderCell: (item: History) => item.occupation },
        { label: 'Cotxe', renderCell: (item: History) => item.access ? 'Entered' : 'Left' }
    ]

    return (
        <div id="history" className={styles.HistoryContainer}>
            <Separator />
            <h1>Historial</h1>
            <p className={styles.ExplanationText}>
                En aquest gràfic es presenta <b>l'evolució històrica i les estadístiques</b>, basant-nos en l'anàlisi de les
                dades per hores.
            </p>
            <div className={styles.OcupationContainer}>
                <p>Horari Major Ocupació: <b>{moreOccupied}</b></p>
                <p>Horari Menor Ocupació: <b>{lessOccupied}</b></p>
            </div>
            <div className={styles.HistoryTableContainer}>
                <div className={styles.HistoryTable}>
                    <CompactTable columns={COLUMNS} data={{ nodes: history }} theme={theme}
                        layout={{ horizontalScroll: true, fixedHeader: true }} />
                </div>
            </div>
        </div>
    )
}

export default Component
