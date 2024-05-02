import "../App.css";
import { useState } from "react";

export function Inicio({ user, setUser }) {
  let [agenda, setAgenda] = useState(false)
  

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
      <input className="inputs" placeholder="Ingrese el nombre del paciente" />
    </div>
      <button onClick={setAgenda(true)} className="botonInicio">
        Agenda de turnos
      </button>
      <button className="botonInicio">Historias clinicas</button>
      <button className="botonInicio">Cargar nuevo Paciente</button>
      <button className="botonInicio">Crear receta medica</button>

    </section>
  );
}
