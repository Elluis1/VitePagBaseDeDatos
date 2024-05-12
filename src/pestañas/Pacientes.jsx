import { useState } from "react";
import {db} from './db'
import { useLiveQuery } from "dexie-react-hooks";

export function Pacientes() {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [nacimiento, setNacimiento] = useState();
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
        setApellido('')
        setNombre('')
        setNacimiento()
      }
      catch(error){
        return console.log('algo fallo')
      }
  }

//   const handleRemovePaciente = (id) => {
//     const newPacientes = listapacientes.filter(
//       (paciente) => paciente.id !== id
//     );
//     setPaciente(newPacientes);
//   };

  return (
    <div>
      <form onSubmit={handlesubmit}>
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
      <ul>
        {pacientes?.map((elemento) => (
          <li key={elemento.id}>
            Nombre: {elemento.nombre} - Apellido: {elemento.apellido} - Fecha de
            nacimiento: {elemento.nacimiento}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

  