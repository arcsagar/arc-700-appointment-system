import { createSlice } from "@reduxjs/toolkit";
type actionType = {
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
        }
    }
});

export const {addUserData} = userReducer.actions;

export default userReducer;