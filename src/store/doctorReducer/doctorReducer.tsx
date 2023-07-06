import { createSlice } from "@reduxjs/toolkit";
export type actionType = {
    payload: {
        newEvents: any
    }
}

const doctorState = {doctorEvents: []}

const doctorReducer = createSlice({
    name: 'doctorReducer',
    initialState: doctorState,
    reducers: {
        addEvents: (state: any, action: actionType) => {
            console.log(action)
            state.doctorEvents = action.payload.newEvents
        },
    }
});

export const {addEvents} = doctorReducer.actions;

export default doctorReducer;