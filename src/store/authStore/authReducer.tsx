import { createSlice } from "@reduxjs/toolkit";

const authState = {
    error: '',
    loading: false
}
type stateActionLoadingType = {
   payload: {
    loading: boolean
   }
}

type stateActionErrorType = {
    payload: {
     error: string
    }
 }
const authStore = createSlice({
    name: "authStore",
    initialState: authState,
    reducers: {
        setError: (state: any, action: stateActionErrorType) => {
            state.error = action.payload.error
        },
        setLoading: (state: any, action: stateActionLoadingType) => {
            state.loading = action.payload.loading
        }

    }
});

export const { setError, setLoading} = authStore.actions;
export default authStore;