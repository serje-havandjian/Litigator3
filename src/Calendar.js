import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
            { title: 'event 1', date: '2023-05-07' },
            { title: 'event 2', date: '2023-05-08git' }
          ]}
      />
    )
  }
}
