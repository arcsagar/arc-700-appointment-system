import UserBookAppointment from "../../components/UserComponent/UserBookAppointment/UserBookAppointment";
import { setError, setLoading } from "../authStore/authReducer";
import { getLocal, loginKey } from "../commonFun";
import { addAppointments, setDoctorBookedAppointments, setUserBookedAppointments } from "./appointment-reducer";

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

  
export const paypalBookAppointment = (appintment: any, paypalData:any, userId:any, navigate:any) => {
  return async (dispatch: any) => {
 
    try {
      const bodyData = JSON.stringify({appintment, paypalData, userId});
      const resObj: any = await fetch("http://localhost:3001/paypal/bookAppintment", {
        method: "POST",
        body: bodyData,
        headers: {
          "Content-type": "application/json",
        },
      });


      const resBody = await resObj.json();
      
      console.log('resBody',resBody)
      alert('appointment booked successfully')
      navigate('/user/bookAppointment');
 
    } catch (error) {
      
    }
  }
}

export const getUserBookedAppointment = (userId: any) => {
  return async (dispatch: any) => {
    try {
      const bodyData = JSON.stringify({userId});
      const resObj: any = await fetch("http://localhost:3001/users/bookedAppointment", {
        method: "POST",
        body: bodyData,
        headers: {
          "Content-type": "application/json",
        },
      });


      const resBody = await resObj.json();

      dispatch(setLoading({loading:false}))
      if (resBody.status === 200) {
          dispatch(setUserBookedAppointments({appointments: resBody.events}))
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
}

export const getDocterBookedAppointment = (userId: any) => {
  return async (dispatch: any) => {
    try {
      const userToken: string = getLocal(loginKey);
      console.log('userToken',userToken)
      const resObj: any = await fetch("http://localhost:3001/doctor/getevent", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Authorization": userToken
        },
      });


      const resBody = await resObj.json();

      dispatch(setLoading({loading:false}))
      if (resBody.status === 200) {
          dispatch(setDoctorBookedAppointments({appointments: resBody.userEvent}))
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
}