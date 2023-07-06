import { createSlice } from "@reduxjs/toolkit";
export type actionType = {
    payload: {
        userData: any
    }
}

const userState = {userData: {}}

const userReducer = createSlice({
    name: 'userReducer',
    initialState: userState,
    reducers: {
        addUserData: (state: any, action: actionType) => {
            console.log(action)
            state.userData = action.payload.userData
        },
        removeUserData : (state: any, action) => {
            state.userData = userState.userData
        } 
    }
});

export const {addUserData, removeUserData} = userReducer.actions;

export default userReducer;