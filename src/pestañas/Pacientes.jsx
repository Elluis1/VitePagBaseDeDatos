import { useState } from "react";
import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

export function Pacientes() {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [nacimiento, setNacimiento] = useState();
  const [nombrefilt, setNombrefilt] = useState();
  const pacientes = useLiveQuery(() => db.paciente.toArray());
  // const [listapacientes, setPaciente] = useState([]);

  async function handlesubmit(e) {
    e.preventDefault;
    try {
      const id = await db.paciente.add({
        nombre,
        apellido,
        nacimiento,
      });

      setApellido("");
      setNombre("");
      setNacimiento();
    } catch (error) {
      return console.log("algo fallo");
    }
  }

  async function filtroNombre(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>Agregar paciente nuevo</div>
        <input
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          placeholder="Escriba el nombre del paciente"
        />
        <input
          onChange={(e) => {
            setApellido(e.target.value);
          }}
          placeholder="Escriba el apellido del paciente"
        />
        <input
          onChange={(e) => {
            setNacimiento(e.target.value);
          }}
          type="date"
          placeholder="Escriba la fecha de nacimiento"
        />
        <button type="submit">Subir</button>
      </form>
      <h1>Buscar pacientes</h1>
      <form onSubmit={filtroNombre}>
        <input onChange={(e) => setNombrefilt(e.target.value)}/>
        <button >Buscar</button>
      </form>
      <h1>
        {!(nombrefilt !== "")
          ? pacientes?.map((elemento) => (
              <li key={elemento.id}>
                Nombre: {elemento.nombre} - Apellido: {elemento.apellido} -
                Fecha de nacimiento: {elemento.nacimiento}{" "}
              </li>
            ))
          : pacientes?.filter((elemento) => {
            !(nombrefilt === elemento.nombre) ? (
              <h1>No hay ningun paciente</h1>
            ) : (
              <li>
                Nombre: {elemento.nombre} - Apellido: {elemento.apellido} -
                Fecha de nacimiento: {elemento.nacimiento}{" "}
              </li>
            );
          })}
      </h1>
    </div>
  );
}
