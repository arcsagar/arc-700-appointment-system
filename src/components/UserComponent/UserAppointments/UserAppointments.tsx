import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookedAppointment } from "../../../store/appointments/appointments-actions";
import AppTable from "../../../common/AppTable";

const UserAppointments = () => {
    const {userData  } = useSelector((state:any) => state.user)
    const tHead = [
        "d_city",
        "d_state",
        "d_email",
        "d_name",
        "d_speciality",
        "allDay",
        "start",
        "end",
        "title",
        "options",
      ];
  
    const {userBookedAppointments  } = useSelector((state:any) => state.appointments)
    console.log('userBookedAppointments',userBookedAppointments)
    console.log('userData',userData)
    const dispatch:any = useDispatch();
    useEffect(() => {
        dispatch(getUserBookedAppointment(userData.id))
    },[])

    const cancelFun = (event:any) => {
        console.log('canecel fun',event);
    }
      
    const completeApp = (event:any) => {
        console.log('completeApp fun',event);
    }
    const buttonOptionArr = [{
        label: 'cancel',
        btFun: cancelFun
      },{
        label: 'complete',
        btFun:completeApp
      }]
    return (
        <div>
            <h1>User  Appointments</h1>
            <AppTable appData={userBookedAppointments} tHead={tHead} buttonOptionArr={buttonOptionArr}/>

        </div>
    )
};

export default UserAppointments;