import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import { headerLinkType } from "../../common/commonTypes";


const DoctorComponent = () => {

    const doctorLinks: headerLinkType[] = [
        {
            btPath: "/doctor" ,
            btName:"Profile", 
            btType: 'bt-success'
        },
        {
            btPath: "/doctor/setAppointment" ,
            btName:"Set Appointment", 
            btType: 'bt-success'
        },
        {
            btPath: "/doctor/appointments" ,
            btName:"Appointments", 
            btType: 'bt-success'
        }
    ]

    return (
        <div>
            <Header headerLink={doctorLinks}/>
            <Outlet/>
        </div>
    )
};
export default DoctorComponent