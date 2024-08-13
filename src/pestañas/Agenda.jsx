import { useState } from "react";
import { listaCitas } from "../Archivos/Citas";
import "../App";

export function Agenda() {
  const [nombre, setNombre] = useState();
  const [filtron, setFiltron] = useState();
  const [filtdia, setFiltdia] = useState();
  const [dia, setDia] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDia(filtdia)
    setFiltron(nombre);
  };

  return (
    <section>
      <h1>Citas pendientes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          placeholder="Lunes"
          onClick={() => setFiltdia("lunes")}
        />
        <input
          type="radio"
          placeholder="Martes"
          onClick={() => setFiltdia("Martes")}
        />
        <input
          type="radio"
          placeholder="Miercoles"
          onClick={() => setFiltdia("Miercoles")}
        />
        <input
          type="radio"
          placeholder="Jueves"
          onClick={() => setFiltdia("Jueves")}
        />
        <input
          type="radio"
          placeholder="Viernes"
          onClick={() => setFiltdia("Viernes")}
        />
        <input
          type="radio"
          placeholder="Sabado"
          onClick={() => setFiltdia("Sabado")}
        />
      </form>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setNombre(e.target.value)}
          type="name"
          className="inputs"
          placeholder="Ingrese el nombre del paciente"
        />
        <button>Buscar</button>
      </form>
      <div className="citas">
        {listaCitas.map((elemento) =>
          !(elemento.dia === dia || elemento.paciente === filtron) ? (
            <h1 key={elemento.id} />
          ) : (
            <li key={elemento.id}>
              Nombre: {elemento.paciente} - Fecha: {elemento.fecha} - Dia:{" "}
              {elemento.dia} - Hora: {elemento.hora} - Razon de la consulta:{" "}
              {elemento.consulta}
              <button onClick={(e) => {console.log(e.target.value)}}className="error">Eliminar cita</button>
            </li>
          )
        )}
      </div>
    </section>
  );
}
