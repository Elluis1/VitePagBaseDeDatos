import { BotonG } from "../componentes/designs";
import "../App.css";

export function Inicio({ user, setUser }) {
  const handleLogout = () => {
    setUser([]);
  };

  return (
    <div>
      <header>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </header>
      <h1> Bienvenido {user} </h1>
      <input placeholder="Ingrese el nombre del paciente" />
      <BotonG className="botonInicio" txt="Agenda de turnos" />
      <BotonG className="botonInicio" txt="Historias clinicas" />
      <BotonG className="botonInicio" txt="Cargar nuevo Paciente" />
      <BotonG className="botonInicio" txt="Crear receta medica" />
    </div>
  );
}
