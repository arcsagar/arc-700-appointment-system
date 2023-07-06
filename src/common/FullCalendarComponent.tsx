
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { DateSelectArg } from '@fullcalendar/core';
import { createEventId } from './cal-event-utils';
import { saveNewEvent } from '../store/doctorReducer/doctorAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const FullCalendarComponent = () => {
  const {userData} = useSelector((state:any) => state.user);
 
  const {doctorEvents } = useSelector((state:any) => state.doctor)

  console.log('doctorEvents',doctorEvents)
  const dispatch:any = useDispatch()
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        userId: userData.id
      };
      dispatch(saveNewEvent(newEvent))
      console.table(newEvent)
      calendarApi.addEvent(newEvent)
    }
  }

    return (
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        selectable={true}
        select={handleDateSelect}
        initialView="dayGridMonth"
        events={doctorEvents}
      />
    )
};
export default FullCalendarComponent