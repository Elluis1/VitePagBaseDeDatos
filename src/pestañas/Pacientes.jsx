import { useState } from "react";

export function Pacientes() {
  const [id, setId] = useState()
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nacimiento, setNacimiento] = useState(Date);
  const [listapacientes, setPaciente] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const nuevoPaciente = [
        id,
        nombre,
        apellido,
        nacimiento,
    ];

    setPaciente([...listapacientes, nuevoPaciente]);
  };

  const handleRemovePaciente = (id) => {
    const newPacientes = listapacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPaciente(newPacientes);
  };

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
        <button type="submit" onClick={setId(Date.now)}>Subir</button>
      </form>
      <h1>
        {listapacientes.map((elemento) => {
          <h2 key={elemento.id} onClick={handleRemovePaciente(elemento.id)}>
            {" "}
            Nombre: {elemento.nombre} - Apellido: {elemento.apellido} - Fecha de
            nacimiento: {elemento.nacimiento}{" "}
          </h2>;
        })}
      </h1>
    </div>
  );
}
