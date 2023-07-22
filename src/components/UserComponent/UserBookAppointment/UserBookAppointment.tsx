import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserEvents } from "../../../store/appointments/appointments-actions";
import AppTable from "../../../common/AppTable";
import { useNavigate } from "react-router-dom";
import { setCurrentBookAppointment } from "../../../store/appointments/appointment-reducer";

const UserBookAppointment = () => {
  const navigate = useNavigate();
  const { appEvents } = useSelector((state: any) => state.appointments);
  const dispatch: any = useDispatch();
  console.table(appEvents);
  useEffect(() => {
    dispatch(getAllUserEvents());
  }, []);

  const bookApp = (event:any) => {
    // console.log('bookApp',event)
    dispatch(setCurrentBookAppointment({appointment: event}))
    navigate('/user/payout')
  }
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
    "options"
  ];

  const buttonOptionArr = [{
    label: 'book',
    btFun: bookApp
  }]
  return (
    <div>
      <h1>User Book Appointments</h1>
      <AppTable appData={appEvents} tHead={tHead} buttonOptionArr={buttonOptionArr}/>
    </div>
  );
};

export default UserBookAppointment;
