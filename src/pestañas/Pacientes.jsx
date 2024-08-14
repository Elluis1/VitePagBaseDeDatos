import { useState } from "react";
import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

export function Pacientes() {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [nacimiento, setNacimiento] = useState();
  const [pacienteSelec, setPacienteSelec] = useState();

  // Usar cuando se pueda implementar bien el filtro
  // const [nombrefilt, setNombrefilt] = useState();

  // Llama a la base de datos y toma hace que pacientes sea una cadena
  const pacientes = useLiveQuery(() => db.paciente.toArray());

  // Guardar un paciente nuevo
  async function handlesubmit(e) {
    e.preventDefault;
    try {
      let id = await db.paciente.add({
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

  // Diseño del formulario
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
      <h2>
        {
          pacientes?.map(elemento => (
            <button onClick={setPacienteSelec(elemento)} key={elemento.id}>
              Nombre: {elemento.nombre} - Apellido: {elemento.apellido} -
              Fecha de nacimiento: {elemento.nacimiento}{" "}
            </button>
          ))
        }
      </h2>
    </div>
  );
}

{/* <h1>Buscar pacientes</h1>
<input onChange={(e) => toString(setNombrefilt(e.target.value))}/> */}

// {! nombrefilt === ""
//   ? pacientes?.map((elemento) => {
//    <li key={elemento.id}>
//      Nombre: {elemento.nombre} - Apellido: {elemento.apellido} -
//      Fecha de nacimiento: {elemento.nacimiento}{" "}
//    </li>
//   })
//   : pacientes?.filter((elemento) => {
//    !(elemento.nombre === nombrefilt)
//    ? (
//        <li key={elemento.id}>
//          Nombre: {elemento.nombre} - Apellido: {elemento.apellido} -
//          Fecha de nacimiento: {elemento.nacimiento}{" "}
//        </li>
//      ) : (
//        <h3>No hay ningun paciente</h3>
//      )
//   })
//  }

