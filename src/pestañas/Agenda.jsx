import { useState } from "react";
import "../App";

export function Agenda() {
  const [filtletra, setFiltletra] = useState("");
  const [listaCitas, setCitas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [consult, setConsult] = useState("");
  const [id, setId] = useState(Date.now);

  const addCita = () => {
    setId(id);
    setNombre(nombre);
    setTime(time);
    setDay(day);
    setConsult(consult);
  };

  setCitas(addCita());

  // const nuevaCita = {
  //   id: 1,
  //   paciente: nombre,
  //   hora: time,
  //   fecha: day,
  //   consulta: consult,
  // }

  const borrarCita = (id) => {
    const citasFiltradas = listaCitas.filter((cita) => cita.id !== id);
  };

  return (
    <section>
      <h2>
        Agregar Cita
        <form>
          <input
            placeholder="Nombre del paciente"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            placeholder="Hora"
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            placeholder="Fecha"
            onChange={(e) => setDay(e.target.value)}
          />
          <input
            placeholder="Razon de consulta"
            onChange={(e) => setConsult(e.target.value)}
          />
          <button type="submit" onClick={setCitas()}>Guardar</button>
        </form>
      </h2>
      <h1>
        Citas pendientes
      </h1>
      <input
        onChange={(e) => setFiltletra(e.target.value)}
        type="name"
        className="inputs"
        placeholder="Ingrese el nombre del paciente"
      />
      {!(listaCitas.length < 1) ? <h1>No hay citas</h1> : <listaCitas.map />}
      <div className="citas">
        {listaCitas.map((elemento) =>
          !(elemento.paciente === filtletra) ? (
            <h1 key={elemento.id} />
          ) : (
            <li key={elemento.id}>
              {" "}
              Nombre:{elemento.paciente} - Fecha: {elemento.fecha} - Hora:{" "}
              {elemento.hora} - Razon de la consulta: {elemento.consulta}{" "}
              <button className="error" onClick={borrarCita(elemento.id)}>
                Eliminar cita
              </button>
            </li>
          )
        )}
      </div>
    </section>
  );
}
