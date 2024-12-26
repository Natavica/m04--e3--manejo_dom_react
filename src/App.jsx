// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DoctorsList from './components/DoctorsList';
import AppointmentForm from './components/AppointmentForm';
import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Bienvenido a mi sitio web</h1>
        {/* Aquí puedes agregar el contenido principal de tu aplicación */}
      </main>
      <DoctorsList />

    

    <div className="App">
      <h1>Bienvenido al sistema de citas médicas</h1>
      <AppointmentForm /> {/* Usar el formulario de citas */}
    </div>

      <Footer />
    </div>
  );
};

export default App;
