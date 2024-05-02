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
      <input className="inputs" placeholder="Ingrese el nombre del paciente" />
      <button className="botonInicio" >Agenda de turnos</button>
      <button className="botonInicio" >Historias clinicas</button>
      <button className="botonInicio" >Cargar nuevo Paciente</button>
      <button className="botonInicio" >Crear receta medica</button>
    </div>
  );
}
