import { setError, setLoading } from "../authStore/authReducer";
import { addAppointments } from "./appointment-reducer";

export const getAllUserEvents = () => {
    return async (dispatch: any) => {
      try {
        const resObj: any = await fetch("http://localhost:3001/user/getAllEvents", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
  
  
        const resBody = await resObj.json();
  
        dispatch(setLoading({loading:false}))
        if (resBody.status === 200) {
            dispatch(addAppointments({allEvents: resBody.events}))
        } else {
          alert(resBody.msg);
          dispatch(setError({error: resBody.msg}))
        }
      } catch (error) {
        alert(error);
        const errorString = 'something went wrong';
        dispatch(setLoading({loading:false}))
        dispatch(setError({error: errorString}))
      }
    };
  };

  