import { useEffect } from "react";
import FullCalendarComponent from "../../../common/FullCalendarComponent";
import { getAllDoctorEvents } from "../../../store/doctorReducer/doctorAction";
import { useDispatch, useSelector } from "react-redux";

const DoctorSetAppointment = () => {
    const {userData} = useSelector((state: any) => state.user);
    const dispatch:any = useDispatch();
    useEffect(() => {
        dispatch(getAllDoctorEvents({userId:userData.id})) 
    },[]);

    return (
        <div>
            <h1>Doctor Set Appointment</h1>
            <FullCalendarComponent/>
        </div>
    )
};

export default DoctorSetAppointment;