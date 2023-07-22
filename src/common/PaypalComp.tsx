import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import AppointmentCard from "./AppointmentCard";
import styless from "./commonClass.module.scss";
import { clearCurrentBookAppointment } from "../store/appointments/appointment-reducer";
import { paypalBookAppointment } from "../store/appointments/appointments-actions";
const PaypalComp = () => {
  const { currentAppointment } = useSelector(
    (state: any) => state.appointments
  );
  const { userData } = useSelector((state: any) => state.user);
  const dispatch:any = useDispatch();
  const navigate = useNavigate();
  console.log("currentAppointment", currentAppointment);
  const createOrder = (data: any) => {
    // Order is created on the server and the order id is returned
    return fetch("http://localhost:3001/paypal/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        appointment: {
          cost: 40,
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };
  const onApprove = (data: any) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch("http://localhost:3001/paypal/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }).then(async (response) => {
      const responseData = await response.json();
      console.log("reponseData", responseData);
      dispatch(
        paypalBookAppointment(
          currentAppointment,
          responseData,
          userData.id,
          navigate
        )
      );
    });
  };
  const initialOptions = {
    clientId:
      "AWiPD9P3rmV1zBkObn8JSvEe4uSSx7eMmziyYFp2TY3mwXe4IAcaSNJA-BsblN5fx5JMgiaTB3dr8DU2",
    currency: "USD",
    intent: "capture",
  };
  return (
    <div className={styless["appointmentCard"]}>
      <div className={styless["width50"]}>
        <AppointmentCard
          doctorName="Dr. John Doe"
          startDate="2023-07-10"
          endDate="2023-07-15"
          appointmentTitle="General Checkup"
          doctorSpecialty="Cardiology"
          doctorCity="New York"
          doctorEmail="johndoe@example.com"
          doctorState="NY"
        />
      </div>
      <div className={styless["width50"]}>
        <Button
          btName="cancel"
          btFun={() => {
            navigate("/user/bookAppointment");
            dispatch(clearCurrentBookAppointment());
          }}
        />

        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            createOrder={(data) => createOrder(data)}
            onApprove={(data) => onApprove(data)}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};
export default PaypalComp;
