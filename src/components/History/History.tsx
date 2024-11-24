import * as React from 'react'
import styles from './History.module.scss'
import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/mantine'
import Separator from '../Separator/Separator'

const nodes = [
  {
    id: 1,
    timeOfEntry: '08:00 AM',
    placesAvailable: 5,
    carMovement: 'Entered'
  },
  {
    id: 2,
    timeOfEntry: '09:00 AM',
    placesAvailable: 4,
    carMovement: 'Left'
  },
  {
    id: 3,
    timeOfEntry: '10:00 AM',
    placesAvailable: 6,
    carMovement: 'Entered'
  },
  {
    id: 4,
    timeOfEntry: '08:00 AM',
    placesAvailable: 5,
    carMovement: 'Entered'
  },
  {
    id: 5,
    timeOfEntry: '09:00 AM',
    placesAvailable: 4,
    carMovement: 'Left'
  },
  {
    id: 6,
    timeOfEntry: '10:00 AM',
    placesAvailable: 6,
    carMovement: 'Entered'
  },
  {
    id: 7,
    timeOfEntry: '08:00 AM',
    placesAvailable: 5,
    carMovement: 'Entered'
  },
  {
    id: 8,
    timeOfEntry: '09:00 AM',
    placesAvailable: 4,
    carMovement: 'Left'
  },
  {
    id: 9,
    timeOfEntry: '10:00 AM',
    placesAvailable: 6,
    carMovement: 'Entered'
  },
  {
    id: 10,
    timeOfEntry: '08:00 AM',
    placesAvailable: 5,
    carMovement: 'Entered'
  },
  {
    id: 11,
    timeOfEntry: '09:00 AM',
    placesAvailable: 4,
    carMovement: 'Left'
  },
  {
    id: 12,
    timeOfEntry: '10:00 AM',
    placesAvailable: 6,
    carMovement: 'Entered'
  },
  {
    id: 13,
    timeOfEntry: '08:00 AM',
    placesAvailable: 5,
    carMovement: 'Entered'
  },
  {
    id: 14,
    timeOfEntry: '09:00 AM',
    placesAvailable: 4,
    carMovement: 'Left'
  },
  {
    id: 15,
    timeOfEntry: '10:00 AM',
    placesAvailable: 6,
    carMovement: 'Entered'
  },
  {
    id: 16,
    timeOfEntry: '08:00 AM',
    placesAvailable: 5,
    carMovement: 'Entered'
  },
  {
    id: 17,
    timeOfEntry: '09:00 AM',
    placesAvailable: 4,
    carMovement: 'Left'
  },
  {
    id: 18,
    timeOfEntry: '10:00 AM',
    placesAvailable: 6,
    carMovement: 'Entered'
  }
]

const Component = () => {
  const data = { nodes }

  const mantineTheme = getTheme(DEFAULT_OPTIONS)
  const theme = useTheme(mantineTheme)

  const COLUMNS = [
    { label: 'Date and Time of Entry', renderCell: (item: any) => item.timeOfEntry },
    { label: 'Parking Space Places Available', renderCell: (item: any) => item.placesAvailable },
    { label: 'Car Entered or Left', renderCell: (item: any) => item.carMovement }
  ]

  return (
    <>
      <div id="history" className={styles.HistoryContainer}>
        <Separator/>
        <h1>Historial</h1>
        <div className={styles.HistoryTableContainer}>
          <div className={styles.HistoryTable}>
            <CompactTable columns={COLUMNS} data={data} theme={theme} layout={{ fixedHeader: true }}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Component
