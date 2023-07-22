import { createSlice } from "@reduxjs/toolkit";

const appointmentState = {
  appEvents: [],
  currentAppointment: {},
  userBookedAppointments: [],
  doctorBookedAppointments: [],
};

type addAppointmentsAction = {
  payload: {
    allEvents: any;
  };
};

type currentAppointmentAction = {
  payload: {
    appointment: any;
  };
};

type BookedAppointmentAction = {
  payload: {
    appointments: any;
  };
};

const appointmetnReducer = createSlice({
  name: "appointment-reducer",
  initialState: appointmentState,
  reducers: {
    addAppointments: (state: any, action: addAppointmentsAction) => {
      state.appEvents = action.payload.allEvents;
    },
    setCurrentBookAppointment: (
      state: any,
      action: currentAppointmentAction
    ) => {
      state.currentAppointment = action.payload.appointment;
    },
    clearCurrentBookAppointment: (state: any) => {
      state.currentAppointment = {};
    },
    setUserBookedAppointments: (
      state: any,
      action: BookedAppointmentAction
    ) => {
      state.userBookedAppointments = action.payload.appointments;
    },
    setDoctorBookedAppointments: (
      state: any,
      action: BookedAppointmentAction
    ) => {
      state.doctorBookedAppointments = action.payload.appointments;
    },
  },
});

export const {
  addAppointments,
  setCurrentBookAppointment,
  clearCurrentBookAppointment,
  setUserBookedAppointments,
  setDoctorBookedAppointments
} = appointmetnReducer.actions;

export default appointmetnReducer;
