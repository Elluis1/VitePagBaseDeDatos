import "../App.css";
import { useState } from "react";

export function Inicio({ user, setUser }) {
  const handleLogout = () => {
    setUser([]);
  };

  return (
    <section>
      <div>
        <header>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </header>
        <h1> Bienvenido {user} </h1>
        <input
          className="inputs"
          placeholder="Ingrese el nombre del paciente"
        />
      </div>
      <button className="botonInicio">Agenda de turnos</button>
      <button className="botonInicio">Pacientes</button>
      <button className="botonInicio">Historias clinicas</button>
      <button className="botonInicio">Crear receta medica</button>
    </section>
  );
}
