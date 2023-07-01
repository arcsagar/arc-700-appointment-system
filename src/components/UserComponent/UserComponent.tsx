import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import { headerLinkType } from "../../common/commonTypes";

const UserComponent = () => {
  
    const doctorLinks: headerLinkType[] = [
        {
            btPath: "/user" ,
            btName:"Profile", 
            btType: 'bt-success'
        },
        {
            btPath: "/user/bookAppointment" ,
            btName:"Book Appointment", 
            btType: 'bt-success'
        },
        {
            btPath: "/user/appointments" ,
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
export default UserComponent