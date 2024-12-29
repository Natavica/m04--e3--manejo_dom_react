import React from "react";

const ServiceList = ({ services, handleServiceChange }) => {
  return (
    <div className="service-list">
      <h2>Servicios Médicos Disponibles</h2>
      <select onChange={handleServiceChange}>
        <option value="">Seleccionar servicio...</option>
        {services.map((service, index) => (
          <option key={index} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServiceList;
