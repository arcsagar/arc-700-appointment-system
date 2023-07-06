import { createSlice } from "@reduxjs/toolkit";

const appointmentState = {
    appEvents: []
}

type addAppointmentsAction = {
    payload: {
        allEvents: any
    }
}
const appointmetnReducer = createSlice({
    name: "appointment-reducer",
    initialState: appointmentState,
    reducers: {
        addAppointments: (state:any, action: addAppointmentsAction) => {
            state.appEvents = action.payload.allEvents
        } 
    }
});

export const {addAppointments } = appointmetnReducer.actions;  

export default appointmetnReducer;