import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../MainComponent/MainComponent";
import DoctorComponent from "../components/Doctor/DoctorComponent";
import UserComponent from "../components/UserComponent/UserComponent";
import AdminComponent from "../components/AdminComponent/AdminComponent";
import DoctorProfile from "../components/Doctor/DoctorProfile/DoctorProfile";
import DoctorSetAppointment from "../components/Doctor/DoctorSetAppointment/DoctorSetAppointment";
import DoctorAppointments from "../components/Doctor/DoctorAppointments/DoctorAppointments";
import UserProfile from "../components/UserComponent/UserProfile/UserProfile";
import UserBookAppointment from "../components/UserComponent/UserBookAppointment/UserBookAppointment";
import UserAppointments from "../components/UserComponent/UserAppointments/UserAppointments";
import Login from "../components/Auth/Login";

const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: '/admin',
      element: <AdminComponent/>
  },
    {
      path: '/user',
      element: <UserComponent/>,
      children: [
        {
          path: '/user',
          element: <UserProfile/>
        },
        {
          path: '/user/bookAppointment',
          element: <UserBookAppointment/>
        },
        {
          path: '/user/appointments',
          element: <UserAppointments/>
        }
      ]
    },
    {
      path: '/doctor',
      element: <DoctorComponent/>,
      children: [
        { path: '/doctor',
          element: <DoctorProfile/>
        },
        {
          path: '/doctor/setAppointment',
          element: <DoctorSetAppointment/>
        },
        {
          path: '/doctor/appointments',
          element: <DoctorAppointments/>
        }
      ]
    },
  ]);

  export default mainRouter;