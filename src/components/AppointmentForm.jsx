import React from "react";

const AppointmentForm = ({
  doctors,
  appointmentDetails,
  handleAppointmentChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar Cita</h2>

      <label htmlFor="patientName">Nombre del paciente:</label>
      <input
        type="text"
        id="patientName"
        name="patientName"
        value={appointmentDetails.patientName}
        onChange={handleAppointmentChange}
        required
      />

      <label htmlFor="doctor">Selecciona un doctor:</label>
      <select
        id="doctor"
        name="selectedDoctor"
        value={appointmentDetails.selectedDoctor}
        onChange={handleAppointmentChange}
        required
      >
        <option value="">Seleccionar...</option>
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.name}>
              {doctor.name} - {doctor.specialty}
            </option>
          ))
        ) : (
          <option disabled>No hay doctores disponibles</option>
        )}
      </select>

      <label htmlFor="appointmentDate">Fecha de la cita:</label>
      <input
        type="date"
        id="appointmentDate"
        name="appointmentDate"
        value={appointmentDetails.appointmentDate}
        onChange={handleAppointmentChange}
        required
      />

      <button type="submit">Agendar cita</button>
    </form>
  );
};

export default AppointmentForm;
