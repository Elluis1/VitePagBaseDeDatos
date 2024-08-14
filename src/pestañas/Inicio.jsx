import "../App.css";
import { useState } from "react";

export function Inicio({ user, setUser }) {
  const [calendary, setCalendary] = useState(false)
  const [pacientes, setPacientes] = useState(false)
  const [receta, setReceta] = useState(false)

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
      <button onClick={setCalendary(true)} className="botonInicio">Agenda de turnos</button>
      <button onClick={setPacientes(true)} className="botonInicio">Pacientes</button>
      <button onClick={setReceta(true)} className="botonInicio">Crear receta medica</button>
    </section>
  );
}
