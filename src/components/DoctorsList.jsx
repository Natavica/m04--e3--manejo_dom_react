import React, { useState, useEffect } from 'react';
import doctorsData from '../data/doctors.json'; // Asegúrate de que la ruta sea correcta

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos que los datos provienen de una API
    setDoctors(doctorsData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Cargando doctores...</div>;
  }

  return (
    <div>
      <h2>Lista de Doctores</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <h3>{doctor.name}</h3>
            <p>Especialidad: {doctor.specialty}</p>
            <p>Teléfono: {doctor.phone}</p>
            <p>Email: {doctor.email}</p>
            <p>{doctor.available ? 'Disponible' : 'No disponible'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
