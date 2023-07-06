import { setError, setLoading } from "../authStore/authReducer";
import { addEvents } from "./doctorReducer";

export const saveNewEvent = (newEventData: any) => {
  return async (dispatch: any) => {
    try {
      const bodyData = JSON.stringify(newEventData);
      const resObj: any = await fetch("http://localhost:3001/saveevent", {
        method: "POST",
        body: bodyData,
        headers: {
          "Content-type": "application/json",
        },
      });


      const resBody = await resObj.json();

      dispatch(setLoading({loading:false}))
      if (resBody.status === 200) {
        dispatch(getAllDoctorEvents({ userId: newEventData.userId }));
       
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


export const getAllDoctorEvents = (userId: any) => {
    return async (dispatch: any) => {
      try {
        const bodyData = JSON.stringify(userId);
        const resObj: any = await fetch("http://localhost:3001/getevent", {
          method: "POST",
          body: bodyData,
          headers: {
            "Content-type": "application/json",
          },
        });
  
  
        const resBody = await resObj.json();
  
        dispatch(setLoading({loading:false}))
        if (resBody.status === 200) {
          dispatch(addEvents({ newEvents: resBody.userEvent }));
         
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