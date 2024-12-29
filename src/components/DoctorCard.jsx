import React from "react";
import "./DoctorCard.css";

// Componente DoctorCard
const DoctorCard = ({ name, specialty, yearsOfExperience }) => {
  return (
    <div className="doctor__card">
      <p className="doctor__card--name">{name}</p>
      <p className="doctor__card--speciality">Especialidad: {specialty}</p>
      <p className="doctor__card--experience">
        Años de experiencia: {yearsOfExperience}
      </p>
    </div>
  );
};

export default DoctorCard;
