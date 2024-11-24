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
import { History } from '../../store/types/history'
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

  useEffect(() => {
    if (history.length > 0) {
      const mostOccupied = history.reduce((prev, current) => (prev.occupation > current.occupation) ? prev : current)
      const lessOccupied = history.reduce((prev, current) => (prev.occupation < current.occupation) ? prev : current)

      setMoreOccupied(dayjs(mostOccupied.time).format('HH') + ':00')
      setLessOccupied(dayjs(lessOccupied.time).format('HH') + ':00')
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
      <Separator/>
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
                        layout={{ horizontalScroll: true, fixedHeader: true }}/>
        </div>
      </div>
    </div>
  )
}

export default Component
