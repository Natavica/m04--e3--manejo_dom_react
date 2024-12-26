import React, { useState, useRef } from 'react';

const AppointmentForm = () => {
  // Estado del formulario
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [doctor, setDoctor] = useState('');

  // Crear una referencia para el campo del nombre del paciente
  const nameInputRef = useRef(null);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para agendar la cita
    console.log('Cita agendada para:', patientName, appointmentDate, doctor);
  };

  // Función para enfocar el campo del nombre cuando el usuario lo pida
  const focusNameInput = () => {
    // Usamos la referencia para enfocar el campo
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Agendar Cita Médica</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientName">Nombre del Paciente:</label>
          <input
            id="patientName"
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            ref={nameInputRef} // Asignamos la referencia al input
          />
        </div>
        <div>
          <label htmlFor="appointmentDate">Fecha de la Cita:</label>
          <input
            id="appointmentDate"
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="doctor">Doctor:</label>
          <select
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          >
            <option value="">Seleccionar Doctor</option>
            <option value="Dr. Juan Pérez">Dr. Juan Pérez - Cardiología</option>
            <option value="Dra. María Gómez">Dra. María Gómez - Pediatría</option>
            <option value="Dr. Carlos Martínez">Dr. Carlos Martínez - Neurología</option>
          </select>
        </div>
        <button type="submit">Agendar Cita</button>
      </form>
      <button onClick={focusNameInput}>Enfocar en el campo Nombre</button>
    </div>
  );
};

export default AppointmentForm;
