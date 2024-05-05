import { useState } from "react";
import { listaCitas } from "../Archivos/Citas";
import "../App";
const pac = "juan";

export function Agenda() {
  const [filtletra, setFiltletra] = useState("");

  return (
    <section>
      <h1>Citas pendientes</h1>
      <form onChange={(e) => setFiltletra(e.target.value)}>
        <input
          type="name"
          className="inputs"
          placeholder="Ingrese el nombre del paciente"
        />
        <div className="citas">
          {listaCitas.map((elemento) =>
            !(elemento.paciente === filtletra) ? (
              <h1 key={elemento.id}/>
            ) : (
              <li key={elemento.id}>
                {" "}
                Nombre:{elemento.paciente} - Fecha: {elemento.fecha} - Hora:{" "}
                {elemento.hora} - Razon de la consulta: {elemento.consulta}{" "}
              </li>
            )
          )}
        </div>
      </form>
    </section>
  );
}
