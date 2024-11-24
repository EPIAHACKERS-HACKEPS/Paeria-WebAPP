import * as React from 'react';
import styles from './History.module.scss';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import {
    getTheme,
} from '@table-library/react-table-library/mantine';
import Separator from '../Separator/Separator';

const nodes = [
    {
        id: 1,
        timeOfEntry: '08:00 AM',
        placesAvailable: 5,
        carMovement: 'Entered',
    },
    {
        id: 2,
        timeOfEntry: '09:00 AM',
        placesAvailable: 4,
        carMovement: 'Left',
    },
    {
        id: 3,
        timeOfEntry: '10:00 AM',
        placesAvailable: 6,
        carMovement: 'Entered',
    },
    {
        id: 4,
        timeOfEntry: '08:00 AM',
        placesAvailable: 5,
        carMovement: 'Entered',
    },
    {
        id: 5,
        timeOfEntry: '09:00 AM',
        placesAvailable: 4,
        carMovement: 'Left',
    },
    {
        id: 6,
        timeOfEntry: '10:00 AM',
        placesAvailable: 6,
        carMovement: 'Entered',
    },
    {
        id: 7,
        timeOfEntry: '08:00 AM',
        placesAvailable: 5,
        carMovement: 'Entered',
    },
    {
        id: 8,
        timeOfEntry: '09:00 AM',
        placesAvailable: 4,
        carMovement: 'Left',
    },
    {
        id: 9,
        timeOfEntry: '10:00 AM',
        placesAvailable: 6,
        carMovement: 'Entered',
    },
    {
        id: 7,
        timeOfEntry: '08:00 AM',
        placesAvailable: 5,
        carMovement: 'Entered',
    },
    {
        id: 8,
        timeOfEntry: '09:00 AM',
        placesAvailable: 4,
        carMovement: 'Left',
    },
    {
        id: 9,
        timeOfEntry: '10:00 AM',
        placesAvailable: 6,
        carMovement: 'Entered',
    },
    {
        id: 7,
        timeOfEntry: '08:00 AM',
        placesAvailable: 5,
        carMovement: 'Entered',
    },
    {
        id: 8,
        timeOfEntry: '09:00 AM',
        placesAvailable: 4,
        carMovement: 'Left',
    },
    {
        id: 9,
        timeOfEntry: '10:00 AM',
        placesAvailable: 6,
        carMovement: 'Entered',
    },
    {
        id: 7,
        timeOfEntry: '08:00 AM',
        placesAvailable: 5,
        carMovement: 'Entered',
    },
    {
        id: 8,
        timeOfEntry: '09:00 AM',
        placesAvailable: 4,
        carMovement: 'Left',
    },
    {
        id: 9,
        timeOfEntry: '10:00 AM',
        placesAvailable: 6,
        carMovement: 'Entered',
    },
];

const Component = () => {
    const data = { nodes };

    const theme = useTheme([
        getTheme(),
        {
            Table: `
            --data-table-library_grid-template-columns:  25% 25% 25% 25% minmax(150px, 1fr);
          `,
        },
    ]);

    const COLUMNS = [
        { label: `Data i hore d'entrada`, renderCell: (item: any) => item.timeOfEntry },
        { label: 'Places de parking disponibles', renderCell: (item: any) => item.placesAvailable },
        { label: 'Cotxe', renderCell: (item: any) => item.carMovement },
    ];

    return (
        <>
            <div id='history' className={styles.HistoryContainer}>
                <Separator />
                <h1>Historial</h1>
                <p className={styles.ExplanationText}>
                    En aquest gràfic es presenta  <b>l'evolució històrica i les estadístiques</b>, basant-nos en l'anàlisi de les dades per hores.
                </p>
                <div className={styles.OcupationContainer}>
                    <p>Horari Major Ocupació: <b>17:00 - 19:00</b> </p>
                    <p>Horari Menor Ocupació: <b>2:00 - 3:00</b> </p>
                </div>
                <div className={styles.HistoryTableContainer}>
                    <div className={styles.HistoryTable}>
                        <CompactTable columns={COLUMNS} data={data} theme={theme} layout={{ horizontalScroll: true, fixedHeader: true }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Component;
