import React from "react";

const AppointmentCard: React.FC<{
  doctorName: string;
  startDate: string;
  endDate: string;
  appointmentTitle: string;
  doctorSpecialty: string;
  doctorCity: string;
  doctorEmail: string;
  doctorState: string;
}> = ({
  doctorName,
  startDate,
  endDate,
  appointmentTitle,
  doctorSpecialty,
  doctorCity,
  doctorEmail,
  doctorState,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-2">{doctorName}</h2>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Start Date:</span> {startDate}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">End Date:</span> {endDate}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Appointment Title:</span>{" "}
        {appointmentTitle}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Doctor Specialty:</span>{" "}
        {doctorSpecialty}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Doctor City:</span> {doctorCity}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Doctor Email:</span> {doctorEmail}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Doctor State:</span> {doctorState}
      </p>
    </div>
  );
};

export default AppointmentCard;