import {  configureStore } from '@reduxjs/toolkit';
import userReducer from '../userReducer/userReducer';
import authStore from '../authStore/authReducer';
import doctorReducer from '../doctorReducer/doctorReducer';
import appointmetnReducer from '../appointments/appointment-reducer';
const mainStore = configureStore({
    reducer: {
        user: userReducer.reducer,
        auth: authStore.reducer,
        doctor: doctorReducer.reducer,
        appointments: appointmetnReducer.reducer
    }
});

export default mainStore;