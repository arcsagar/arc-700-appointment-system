import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocterBookedAppointment } from "../../../store/appointments/appointments-actions";
import AppTable from "../../../common/AppTable";

const DoctorAppointments = () => {
    const dispatch:any = useDispatch();
    useEffect(() => {
        dispatch(getDocterBookedAppointment(userData.id))
    },[])
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
  
    const {doctorBookedAppointments  } = useSelector((state:any) => state.appointments)
    console.log('userBookedAppointments',doctorBookedAppointments)
    const { userData } = useSelector((state: any) => state.user);

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
            <h1>Doctor  Appointments</h1>
            <AppTable appData={doctorBookedAppointments} tHead={tHead} buttonOptionArr={buttonOptionArr}/>

        </div>
    )
};

export default DoctorAppointments;