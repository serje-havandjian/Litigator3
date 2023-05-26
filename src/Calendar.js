import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import MiniDrawer from './Drawer'



function Calendar(){

    const handleDateClick = (arg) =>{
        alert(arg.dateStr)
    }
    
    return (
        <>
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
          initialView="dayGridMonth"
          events={[
              { title: 'Meet & Confer With Opposing Counsel', date: '2023-05-07' },
              { title: 'Demurrer Due', date: '2023-05-12' }
            ]}
          dateClick={handleDateClick}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
        />
        </>
      )
}

export default Calendar
