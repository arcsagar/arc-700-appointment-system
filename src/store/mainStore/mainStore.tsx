import {  configureStore } from '@reduxjs/toolkit';
import userReducer from '../userReducer/userReducer';
const mainStore = configureStore({
    reducer: {
        user: userReducer.reducer
    }
});

export default mainStore;