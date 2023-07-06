import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserEvents } from "../../../store/appointments/appointments-actions";
import AppTable from "../../../common/AppTable";

const UserBookAppointment = () => {
  const { appEvents } = useSelector((state: any) => state.appointments);
  const dispatch: any = useDispatch();
  console.table(appEvents);
  useEffect(() => {
    dispatch(getAllUserEvents());
  }, []);

  const bookApp = () => {
    console.log('bookApp')
  }
  const tHead = [
    "allDay",
    "d_city",
    "d_state",
    "d_email",
    "d_name",
    "d_speciality",
    "start",
    "end",
    "title",
    "options"
  ];

  return (
    <div>
      <h1>User Book Appointments</h1>
      <AppTable appData={appEvents} tHead={tHead} bookApp={bookApp}/>
    </div>
  );
};

export default UserBookAppointment;
